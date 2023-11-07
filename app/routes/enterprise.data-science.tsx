import { DataSciencePage } from '~/view/pages/enterprise'
import { MetaFunction } from '@remix-run/node'

export default function DataScience() {
  return <DataSciencePage />
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Enterprise Data Science' },
    { property: 'og:title', content: 'Enterprise Data Science' },
    {
      name: 'description',
      content:
        'Empower your enterprise with advanced data science capabilities using Akila Analytics.'
    }
  ]
}
