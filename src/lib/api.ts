import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { unified } from 'unified'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypePrettyCode from 'rehype-pretty-code'
import { rehypeResolveAndRewriteImgs, rehypeMarkZoomable } from './rehype'


const postsDirectory = path.join(process.cwd(), 'content')

export type Post = {
  title: string;
  id: string;
  pubDate: string;
  description: string;
  category: string;
  html: string;
}

function getPostFiles() {
  return fs.readdirSync(postsDirectory)
}

function getParser() {
  return unified()
    .use(remarkParse)
    .use(remarkGfm)                
    .use(remarkRehype)              
    .use(rehypeSlug)               
    .use(rehypePrettyCode, {
      theme: 'houston',
      keepBackground: true,
    })
    .use(rehypeResolveAndRewriteImgs, { assetsDir: path.join(process.cwd(), 'content', 'assets') })
    .use(rehypeMarkZoomable)
    .use(rehypeStringify);
}

const parser = getParser()

export async function getPostById(id: string): Promise<Post | null> {
  const realId = id.replace(/\.md$/, '')
  const fullPath = path.join(postsDirectory, `${realId}.md`)
  
  try {
    const { data, content } = matter(await fs.promises.readFile(fullPath, 'utf8'))

    const html = await parser.process(content)
    const pubDate = new Date(data.pubDate)

    return {
      ...data,
      title: data.title as string,
      id: realId,
      pubDate: `${pubDate.toISOString().slice(0, 10)}`,
      description: data.description as string,
      category: data.category as string,
      html: html.value.toString(),
    }
  } catch (error) {
    if ((error as any)?.code === 'ENOENT') {
      return null
    }
    throw error
  }
}

export async function getPageMarkdown(string_: string) {
  const { data, content } = matter(
    fs.readFileSync(path.join('_pages', string_), 'utf8'),
  )
  const html = await parser.process(content)

  return {
    ...data,
    html: html.value.toString(),
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const posts = await Promise.all(getPostFiles().map(id => getPostById(id)))
  const validPosts = posts.filter((post): post is Post => post !== null)
  return validPosts.sort((post1, post2) => (post1.pubDate > post2.pubDate ? -1 : 1))
}