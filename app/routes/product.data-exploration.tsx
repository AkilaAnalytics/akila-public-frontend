import { DataExplorationPage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default function DataExploration() {
  return <DataExplorationPage />
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Data Exploration' },
    { property: 'og:title', content: 'Data Exploration' },
    {
      name: 'description',
      content:
        'Explore your data effortlessly with Akila Analytics. Understand patterns, correlations, and derive insights in real-time.'
    }
  ]
}
