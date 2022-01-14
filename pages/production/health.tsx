import type { NextPage } from 'next'

import { MetricsCards } from '../../components/organisms/MetricsCards'
import { Dashboard } from '../../components/layouts/Dashboard'
import { getPerformanceResults } from '../../core/datasources/getPerformanceResults'
import { getTestSuiteResults } from '../../core/datasources/getTestSuiteResults'

const Page: NextPage<{
  performanceResults: PerformanceResults
  testSuiteResults: TestSuiteResults
  error: string
}> = ({ performanceResults, testSuiteResults, error = '' }) => {

  if (error) {
    console.error(error)
  }

  console.log('performanceResults:', performanceResults)

  if (!performanceResults?.success) {
    return <p>Test failed!</p>
  }
  console.log('testSuiteResults:', testSuiteResults)

  const metrics = [
    {
      title: 'Page Load',
      amount: performanceResults.pageLoad / 1000,
      unit: 'sec'
    },
    {
      title: `Sanity Checks`,
      amount: `${testSuiteResults.stats.passPercent}%`,
      unit: 'sane'
    },
    {
      title: `Critical Flow Duration`,
      amount: testSuiteResults.stats.duration,
      unit: 'sec'
    },
  ]

  return (
    <Dashboard>
      <MetricsCards metrics={metrics} />
    </Dashboard>
  )
}

export async function getServerSideProps() {
  const performanceResults = await getPerformanceResults()
  const testSuiteResults = await getTestSuiteResults()
  
  return { props: { performanceResults, testSuiteResults } }
}

export default Page
