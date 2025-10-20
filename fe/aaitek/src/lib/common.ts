// latest posts with populated relations
export function getArticlesQuery(page = 1, pageSize = 10) {
  return {
    'pagination[page]': String(page),
    'pagination[pageSize]': String(pageSize),
    'sort[0]': 'publishedAt:desc',
    'populate': 'coverImage,author.avatar,tags,seo'
  };
}