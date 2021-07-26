import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { PostContent, PostData } from './type'
import { DynamicPostProps } from '../pages/posts/type'
import remark from 'remark'
import html from 'remark-html'

const postDirectory = path.join(process.cwd(), 'posts')

const getSortedPostData = (): PostData[] => {
  const fileNames = fs.readdirSync(postDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      id,
      contentHtml: '',
      ...(matterResult.data as PostContent),
    }
  })

  return allPostsData.sort(({ date: a }, { date: b }) => {
    return a < b ? 1 : a > b ? -1 : 0
  })
}

const getAllPostIds = (): DynamicPostProps[] => {
  const fileNames = fs.readdirSync(postDirectory)

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export const getPostData = async (id: string): Promise<PostData> => {
  const fullPath = path.join(postDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  const processedContet = await remark().use(html).process(matterResult.content)
  const contentHtml = processedContet.toString()

  return {
    id,
    contentHtml,
    ...(matterResult.data as PostContent),
  }
}

export { getSortedPostData, getAllPostIds }
