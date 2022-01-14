import { useEffect, useState } from 'react'
import { useRemark } from 'react-remark'
import type { NextPage } from 'next'

import { Dashboard } from '../../components/layouts/Dashboard'
import { getDocumentation } from '../../core/datasources/getDocumentation'
import { DocFilesCards } from '../../components/organisms/DocFileCards'
import { formatDate } from '../../core/utils'

const Page: NextPage<{
  title: string
  docs: DocFile[]
}> = ({ title, docs }) => {
  const [currentDoc, setCurrentDoc] = useState<DocFile>()
  const [reactContent, setMarkdownSource] = useRemark({
    rehypeReactOptions: {
      components: {
        h1: (props: any) => <h1 className="text-3xl mt-1 mb-3" {...props} />,
        h2: (props: any) => <h2 className="text-2xl mt-3 mb-1" {...props} />,
        h3: (props: any) => <h3 className="text-lg mt-1 mb-1" {...props} />,
        ul: (props: any) => <ul className="my-2" {...props} />,
        li: (props: any) => <li className="text-sm ml-4 mb-1 list-disc" {...props} />,
        p: (props: any) => <p className="text-sm mb-1" {...props} />,
        a: (props: any) => <a className="text-sm font-semibold text-blue-800" {...props} />,
      },
    },
  })

  const firstDoc = docs[0]

  useEffect(() => {
    if (firstDoc?.content) {
      console.log('firstDoc content:',firstDoc?.content)
      setCurrentDoc(firstDoc)
    }
  }, [firstDoc.content])

  useEffect(() => {
    if (currentDoc?.content) {
      setMarkdownSource(currentDoc?.content)
    }
  }, [currentDoc?.content])

  return (
    <Dashboard noScroll title={title}>
      <div className="flex flex-wrap">
        <div className="w-1/3 overflow-auto h-screen pl-3 pr-1 pb-20 scrollbar scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 scrollbar-thumb-rounded">
          <DocFilesCards docs={docs} onSelect={setCurrentDoc} />
        </div>
        <div className="w-2/3 pl-3 pr-2">
          {currentDoc ? 
          <div
            className="card flex flex-col justify-between shadow-xl px-4 py-3 mb-1 w-full bg-white dark:bg-gray-700"
            >
            <div className="flex flex-row w-full justify-between items-center my-2">
              <a
                className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200"
                href={currentDoc.url}
                target="_blank"
                rel="noreferrer noopener">
                Open document in Github
              </a>
            </div>
            <div className="overflow-auto h-screen mb-5 scrollbar scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 scrollbar-thumb-rounded">
              {reactContent}
            </div>
          </div>
          : null}
        </div>
      </div>
    </Dashboard>
  )
}

export async function getServerSideProps() {
  const { title, docs } = await getDocumentation(
    process.env.DOCUMENTATION_FILES_DIR,
    process.env.DOCUMENTATION_FILES_FILTER
  )

  return { props: { title, docs } }
}

export default Page
