import { GovernancePage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default GovernancePage

export const meta: MetaFunction = () => {
  const title = 'Data Governance - Akila Analytics Platform'
  const description =
    'Ensure data quality, consistency, and security with our governance features.'
  return [
    { title: title },
    { property: 'og:title', content: title },
    {
      name: 'description',
      content: description
    },
    {
      name: 'og:description',
      content: description
    }
  ]
}
