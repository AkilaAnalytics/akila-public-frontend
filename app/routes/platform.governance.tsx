import { GovernancePage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default function Governance() {
  return <GovernancePage />
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Data Governance - Akila Analytics Platform' },
    {
      property: 'og:title',
      content: 'Data Governance - Akila Analytics Platform'
    },
    {
      name: 'description',
      content:
        'Ensure data quality, consistency, and security with our governance features.'
    }
  ]
}
