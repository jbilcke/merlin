import type { NextPage } from 'next'

import { MetricsCards } from '../../components/organisms/MetricsCards'
import { Dashboard } from '../../components/layouts/Dashboard'

const Candidates: NextPage = () => {
  return (
    <Dashboard>
      <MetricsCards metrics={[]} />
    </Dashboard>
  )
}

export default Candidates
