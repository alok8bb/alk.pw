import { Plugin } from 'unified'
import { Node } from 'unist'
import { visit } from 'unist-util-visit'
import path from 'path'

type Options = { assetsDir?: string }

export const rehypeResolveAndRewriteImgs: Plugin<[Options?]> = (opts = {}) => {
  const assetsDir = opts.assetsDir || path.join(process.cwd(), 'content', 'assets')
  const normalizedAssetsDir = path.normalize(assetsDir)

  return (tree: Node, file: any): void => {
    const markdownFilePath = file?.path || file?.history?.[0] || ''
    const markdownDir = markdownFilePath ? path.dirname(markdownFilePath) : process.cwd()

    visit(tree as any, 'element', (node: any) => {
      if (node.tagName !== 'img' || !node.properties || !node.properties.src) return
      let src: string = node.properties.src as string

      if (/^https?:\/\//.test(src) || src.startsWith('/')) return

      const resolved = path.normalize(path.resolve(markdownDir, src))

      if (resolved.startsWith(normalizedAssetsDir)) {
        const relativeInsideAssets = path.relative(normalizedAssetsDir, resolved).replace(/\\+/g, '/')
        node.properties.src = `/assets/${relativeInsideAssets}`
      } else {
        const contentRoot = path.join(process.cwd(), 'content')
        if (resolved.startsWith(path.normalize(contentRoot))) {
          const rel = path.relative(contentRoot, resolved).replace(/\\+/g, '/')
          node.properties.src = `/content/${rel}`
        } else {
          node.properties.src = `/${path.relative(process.cwd(), resolved).replace(/\\+/g, '/')}`
        }
      }
    })
  }
}

export const rehypeMarkZoomable: Plugin = () => {
  return (tree: Node): void => {
    visit(tree as any, 'element', (node: any) => {
      if (node.tagName === 'img') {
        node.properties = node.properties || {}
        node.properties['data-zoomable'] = true
        node.properties['loading'] = node.properties['loading'] || 'lazy'
      }
    })
  }
}
