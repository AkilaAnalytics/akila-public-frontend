import { MarketingAnalyticsPage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default function PrivateEquity() {
  return <MarketingAnalyticsPage />
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Marketing Analytics: Gain Insights Faster' },
    {
      property: 'og:title',
      content: 'Marketing Analytics: Gain Insights Faster'
    },
    {
      name: 'description',
      content: 'Optimize your marketing strategies using Akila Analytics.'
    }
  ]
}
