import { fdir } from 'fdir'
import path from 'path'
import { getFile } from './getFile'

export const getDocumentation = async (
  crawlPath: string = '.',
  globMask: string = '**/*.md'
): Promise<{
  title: string
  docs: DocFile[]
}> => {

  const api = new fdir()
    .withFullPaths()
    .glob(globMask)
    .crawl(crawlPath)

  const filePaths = (await api.withPromise()) as string[]

  const docs = await Promise.all(
    filePaths.map(filePath => getFile(filePath, crawlPath))
  )

  const title = docs[0]?.directory || path.basename(crawlPath)

  return { title, docs }
}

