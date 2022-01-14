import { promises as fs } from 'fs'
import path from 'path'

export const getFile = async (filePath: string, crawlPath = ''): Promise<DocFile> => {

  const fileName = path.basename(filePath)

  const repositoryUrlPrefix = process.env.DOCUMENTATION_FILES_WEB_ROOT
  const relativePath = filePath.replace(path.resolve(crawlPath), '')

  const url = repositoryUrlPrefix + relativePath

  try {

    const stats = await fs.stat(filePath)

    const createdAt = stats.birthtime.toISOString()
    const updatedAt = stats.mtime.toISOString()

    const content = (
      await fs.readFile(filePath, 'utf8')
    ) as string

    return {
      name: fileName,
      path: filePath,
      directory: path.basename(path.dirname(filePath)),
      createdAt,
      updatedAt,
      content,
      url,
    }
  
  } catch (error) {
    return {
      name: fileName,
      path: filePath,
      directory: path.basename(path.dirname(filePath)),
      createdAt: '',
      updatedAt: '',
      content: '',
      url,
    }
  }
}

