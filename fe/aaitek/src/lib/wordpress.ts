import { Blog, WordPressPost, Category, Author, Tag } from "@/types";

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || "https://test1.ddev.site/wp-json/wp/v2";

// Allow self-signed certificates for development
if (process.env.NODE_ENV === 'development') {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

/**
 * Map WordPress post to internal Blog interface
 */
export function mapWordPressPostToBlog(post: WordPressPost): Blog {
    // Extract featured image
    const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
    const imageUrl = featuredMedia?.source_url || "";

    // Extract author
    const authorData = post._embedded?.author?.[0];
    const author: Author = {
        id: authorData?.id || 0,
        name: authorData?.name || "Unknown Author",
        slug: authorData?.name.toLowerCase().replace(/\s+/g, '-') || "unknown-author",
        bio: authorData?.description || "",
        createdAt: post.date,
        updatedAt: post.date,
        avatar: authorData?.avatar_urls ? [{
            url: Object.values(authorData.avatar_urls)[0],
            width: 96,
            height: 96
        }] : undefined
    };

    // Extract categories and tags
    const terms = post._embedded?.["wp:term"] || [];
    const categories = terms.find(t => t.length > 0 && t[0].taxonomy === 'category') || [];
    const tags = terms.find(t => t.length > 0 && t[0].taxonomy === 'post_tag') || [];

    const category: Category | undefined = categories.length > 0 ? {
        id: categories[0].id,
        name: categories[0].name,
        slug: categories[0].slug,
        createdAt: post.date,
        updatedAt: post.date,
        color: "#FBD506" // Default color
    } : undefined;

    const blogTags: Tag[] = tags.map(t => ({
        id: t.id,
        name: t.name,
        slug: t.slug,
        createdAt: post.date,
        updatedAt: post.date,
        color: "#64748B" // Default color
    }));

    return {
        id: post.id,
        Title: post.title.rendered,
        Description: post.excerpt.rendered.replace(/<[^>]*>/g, '').slice(0, 200) + '...',
        Content: post.content.rendered,
        slug: post.slug,
        createdAt: post.date,
        updatedAt: post.date,
        publishedAt: post.date,
        Image: imageUrl ? [{
            url: imageUrl,
            width: featuredMedia?.media_details?.sizes?.full?.width || 800,
            height: featuredMedia?.media_details?.sizes?.full?.height || 600,
            formats: {
                medium: {
                    url: featuredMedia?.media_details?.sizes?.medium?.source_url || imageUrl,
                    width: featuredMedia?.media_details?.sizes?.medium?.width || 0,
                    height: featuredMedia?.media_details?.sizes?.medium?.height || 0,
                },
                thumbnail: {
                    url: featuredMedia?.media_details?.sizes?.thumbnail?.source_url || imageUrl,
                    width: featuredMedia?.media_details?.sizes?.thumbnail?.width || 0,
                    height: featuredMedia?.media_details?.sizes?.thumbnail?.height || 0,
                }
            }
        }] : undefined,
        category,
        author,
        tags: blogTags,
        readTime: Math.ceil(post.content.rendered.split(' ').length / 200)
    };
}

/**
 * Fetch posts from WordPress
 */
export async function getWordPressPosts(params?: {
    page?: number;
    per_page?: number;
    search?: string;
    category?: string; // category slug
}): Promise<{ data: Blog[], total: number }> {
    try {
        const query = new URLSearchParams({
            _embed: 'true',
            page: (params?.page || 1).toString(),
            per_page: (params?.per_page || 12).toString(),
        });

        if (params?.search) {
            query.append('search', params.search);
        }

        // If category slug is provided, we first need to find the category ID
        if (params?.category) {
            const catRes = await fetch(`${WORDPRESS_API_URL}/categories?slug=${params.category}`);
            const cats = await catRes.json();
            if (cats.length > 0) {
                query.append('categories', cats[0].id);
            }
        }

        const res = await fetch(`${WORDPRESS_API_URL}/posts?${query.toString()}`, {
            next: { revalidate: 60 }
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch posts: ${res.statusText}`);
        }

        const total = parseInt(res.headers.get('X-WP-Total') || '0');
        const posts: WordPressPost[] = await res.json();

        return {
            data: posts.map(mapWordPressPostToBlog),
            total
        };
    } catch (error) {
        console.error("Error fetching WordPress posts:", error);
        return { data: [], total: 0 };
    }
}

/**
 * Fetch single post by slug
 */
export async function getWordPressPostBySlug(slug: string): Promise<Blog | null> {
    try {
        const res = await fetch(`${WORDPRESS_API_URL}/posts?slug=${slug}&_embed=true`, {
            next: { revalidate: 60 }
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch post: ${res.statusText}`);
        }

        const posts: WordPressPost[] = await res.json();

        if (posts.length === 0) {
            return null;
        }

        return mapWordPressPostToBlog(posts[0]);
    } catch (error) {
        console.error("Error fetching WordPress post:", error);
        return null;
    }
}

/**
 * Fetch all categories
 */
export async function getWordPressCategories(): Promise<Category[]> {
    try {
        const res = await fetch(`${WORDPRESS_API_URL}/categories?per_page=100`, {
            next: { revalidate: 3600 }
        });

        if (!res.ok) {
            return [];
        }

        const cats = await res.json();
        return cats.map((c: any) => ({
            id: c.id,
            name: c.name,
            slug: c.slug,
            description: c.description,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            color: "#FBD506" // Default
        }));
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
}
