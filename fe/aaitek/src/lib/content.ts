import { marked } from 'marked';

// Configure marked options for better rendering
marked.setOptions({
  gfm: true, // GitHub Flavored Markdown
  breaks: true, // Line breaks
});

/**
 * Processes content that may be HTML, Markdown, or plain text
 * Returns processed HTML ready for rendering (basic sanitization only)
 */
export function processContent(content: string): string {
  if (!content) return '';

  // Check if content is already HTML (contains HTML tags)
  const hasHtmlTags = /<[^>]*>/g.test(content);

  let processedContent: string;

  if (hasHtmlTags) {
    // Content appears to be HTML, use it directly
    processedContent = content;
  } else {
    // Content appears to be Markdown or plain text, convert to HTML
    processedContent = marked(content) as string;
  }

  // Basic sanitization - remove dangerous tags and attributes
  processedContent = processedContent
    .replace(/<script[^>]*>.*?<\/script>/gi, '') // Remove script tags
    .replace(/<iframe[^>]*>.*?<\/iframe>/gi, '') // Remove iframe tags
    .replace(/on\w+="[^"]*"/gi, '') // Remove event handlers
    .replace(/javascript:/gi, ''); // Remove javascript: URLs

  // Enhance paragraph spacing and formatting
  processedContent = processedContent
    .replace(/<p>/gi, '<p class="mb-6 leading-loose text-lg">') // Add spacing and typography to paragraphs
    .replace(/<h1>/gi, '<h1 class="text-5xl font-bold mb-8 mt-16 text-white tracking-tight">') // Style h1
    .replace(/<h2>/gi, '<h2 class="text-4xl font-bold mb-6 mt-12 text-white tracking-tight">') // Style h2
    .replace(/<h3>/gi, '<h3 class="text-3xl font-bold mb-4 mt-10 text-white tracking-tight">') // Style h3
    .replace(/<h4>/gi, '<h4 class="text-2xl font-bold mb-4 mt-8 text-white tracking-tight">') // Style h4
    .replace(/<h5>/gi, '<h5 class="text-xl font-bold mb-3 mt-6 text-white tracking-tight">') // Style h5
    .replace(/<h6>/gi, '<h6 class="text-lg font-bold mb-3 mt-6 text-white tracking-tight">') // Style h6
    .replace(/<ul>/gi, '<ul class="space-y-2 mb-6 pl-6">') // Style unordered lists
    .replace(/<ol>/gi, '<ol class="space-y-2 mb-6 pl-6">') // Style ordered lists
    .replace(/<li>/gi, '<li class="text-lg leading-loose">') // Style list items
    .replace(/<blockquote>/gi, '<blockquote class="border-l-4 border-[#FBD506] pl-6 italic text-xl bg-[#252525] py-4 rounded-r-lg my-6">') // Style blockquotes
    .replace(/<code>/gi, '<code class="bg-[#252525] text-[#FBD506] px-2 py-1 rounded text-sm font-mono">') // Style inline code
    .replace(/<pre>/gi, '<pre class="bg-[#252525] border border-[#FBD506]/20 rounded-lg p-4 overflow-x-auto my-6">') // Style code blocks
    .replace(/<img/gi, '<img class="rounded-lg shadow-lg my-6 w-full h-auto"') // Style images
    .replace(/<a/gi, '<a class="text-[#FBD506] hover:text-[#F4A607] font-medium underline decoration-2 underline-offset-2"') // Style links
    .replace(/<strong>/gi, '<strong class="font-bold text-white">') // Style bold text
    .replace(/<em>/gi, '<em class="italic text-gray-200">'); // Style italic text

  return processedContent;
}

/**
 * Estimates reading time based on content
 */
export function calculateReadingTime(content: string): number {
  if (!content) return 0;

  // Remove HTML tags and calculate word count
  const plainText = content.replace(/<[^>]*>/g, '');
  const wordCount = plainText.trim().split(/\s+/).length;

  // Average reading speed is 200 words per minute
  return Math.ceil(wordCount / 200);
}