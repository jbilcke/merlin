import { FC } from 'react'

export const MetricCard: FC<Metric> = ({ title = '', amount, percentage = 0, unit = '' }) =>
<div className="card shadow-xl px-6 py-4 bg-white dark:bg-gray-700">
  <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
    {title}
  </p>
  <div className="flex items-end space-x-2 my-3">
    <p className="text-5xl text-black dark:text-white font-bold">
      {typeof amount === 'string' ? amount : new Intl.NumberFormat("en-US").format(amount)}
    </p>
    {percentage >= 0
    ? <span className="flex items-center">
      <svg
        width="20"
        fill="currentColor"
        height="20"
        className="h-3 text-green-500"
        viewBox="0 0 1792 1792"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
      </svg>
      {unit ? unit : `${percentage}%`}
    </span> 
    : <span className="text-red-500 text-xl font-bold flex items-center">
        <svg
          width="20"
          fill="currentColor"
          height="20"
          className="h-3 rotate-180 transform"
          viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
        </svg>
        {unit ? unit : `${percentage}%`}
      </span>}
  </div>
</div>


export const MetricsCards: FC<{
  metrics: Metric[]
}> = ({ metrics }) =>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
    {metrics.map(metric => <MetricCard key={metric.title} {...metric} />)}
  </div>

