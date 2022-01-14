import { FC } from 'react'

export const DocFileCard: FC<DocFile & { 
  onClick?: () => void
}> = ({
  name,
  path,
  createdAt,
  updatedAt,
  content,
  url,
  onClick,
}) =>
<div
  className="flex flex-row justify-between items-center shadow-md px-4 py-3 mb-1 w-full bg-white dark:bg-gray-700 cursor-pointer"
  onClick={onClick}
  >
  <div className="flex w-6 justify-center text-xl text-gray-400 dark:text-white font-semibold">
    {parseInt(name.match(/^(\d)+-/)[0] || 0)}
    </div>

    <div className="flex text-sm w-3/5 text-gray-700 dark:text-white font-semibold">{
      name.replace(/^\d+/gi, '').replace(/-/gi, ' ').replace('.md', '')
    }</div>

    <div className="flex text-2xs">{content.match(/(\d\d\d\d-\d\d-\d\d)/)[0]}</div>

</div>


export const DocFilesCards: FC<{
  docs: DocFile[]
  onSelect: (doc: DocFile) => void
}> = ({ docs, onSelect }) =>
  <div className="grid grid-cols-1 gap-4 pr-4">
    {docs.map(doc =>
      <DocFileCard
      key={doc.path}
      {...doc}
      onClick={() => onSelect(doc)}
    />)}
  </div>

