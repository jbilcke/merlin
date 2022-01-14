import { FC } from 'react'

export const IssueCard: FC<Issue> = ({ id, identifier, title, url, ...issue }) =>
<div className="card flex flex-row justify-between items-center shadow-xl px-4 py-3 mb-1 w-full bg-white dark:bg-gray-700">
  <div className="">
  <span className="text-xs mr-2">{identifier}</span>
    <a
      className="text-xs w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200"
      href={url}
      target="_blank"
      rel="noreferrer noopener">
      {title}
    </a>
  </div>
</div>


export const IssuesCards: FC<{
  issues: Issue[]
}> = ({ issues }) =>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
    {issues.map(pr => <IssueCard key={pr.id} {...pr} />)}
  </div>

