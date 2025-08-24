import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    pubDate: { type: 'date', required: true },
    updatedDate: { type: 'date', required: false },
    description: { type: 'string', required: true },
    category: { type: 'enum', options: ['tech', 'life'], required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/blog/${post._raw.flattenedPath}` },
  },
}))

export default makeSource({ contentDirPath: 'content', documentTypes: [Post] })