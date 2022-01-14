import type { NextPage } from 'next'

import { PullRequestsCards } from '../../components/organisms/PullRequestsCards'
import { Dashboard } from '../../components/layouts/Dashboard'
import { getPullRequests } from '../../core/datasources/getPullRequests'

const Page: NextPage<{
  pullRequests: PullRequest[]
}> = ({ pullRequests }) => {
  return (
    <Dashboard>
      <PullRequestsCards pullRequests={pullRequests} />
    </Dashboard>
  )
}


export async function getServerSideProps() {
  const pullRequests = await getPullRequests()
 
  // Pass data to the page via props
  return { props: { pullRequests } }
}

export default Page
