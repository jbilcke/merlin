import { FC } from 'react'

export const PullRequestCard: FC<PullRequest> = ({ id, title, html_url, user, ...pr }) =>
<div className="card flex flex-row justify-between items-center shadow-xl px-4 py-3 mb-1 w-full bg-white dark:bg-gray-700">
  <div className="flex">
    <a
      className="text-xs w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200"
      href={html_url}
      target="_blank"
      rel="noreferrer noopener">
      {title}
    </a>
  </div>
  <div className="flex flex-row items-center">
      <span className="text-xxs">{user.login}</span>
      <div className="avatar">
        <div className="mb-1 ml-2 rounded-full w-5 h-5">
          <img src={user.avatar_url} />
        </div>
      </div>
    </div>
</div>


export const PullRequestsCards: FC<{
  pullRequests: PullRequest[]
}> = ({ pullRequests }) =>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
    {pullRequests.map(pr => <PullRequestCard key={pr.id} {...pr} />)}
  </div>

