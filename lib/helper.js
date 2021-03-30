import remark from 'remark'
import html from 'remark-html'

export function showImage(url) {
  // return process.env.NODE_ENV !== 'development' ? url : `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`
  return url
}

export async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown)
  
  return result.toString()
}