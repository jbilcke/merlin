import type { NextPage } from 'next'

import { RestEndpointMethodTypes } from '@octokit/action'
// type PullRequestsResponse = RestEndpointMethodTypes["pulls"]["list"]["response"]

import { IssuesCards } from '../../components/organisms/IssuesCards'
import { Dashboard } from '../../components/layouts/Dashboard'
import { getIssues } from '../../core/datasources/getIssues'

const Page: NextPage<{
  issues: Issue[]
}> = ({ issues }) => {
  return (
    <Dashboard>
      <IssuesCards issues={issues} />
    </Dashboard>
  )
}

export async function getServerSideProps() {
  const issues = await getIssues()

  // Pass data to the page via props
  return { props: { issues } }
}

export default Page
