import { CustomerProfitabilityPage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default function PrivateEquity() {
  return <CustomerProfitabilityPage />
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Customer Profitability' },
    { property: 'og:title', content: 'Customer Profitability' },
    {
      name: 'description',
      content: 'Dive deep into customer profitability analytics with Akila.'
    }
  ]
}
