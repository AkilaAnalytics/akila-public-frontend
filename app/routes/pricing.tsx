import { PricingPage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default function Pricing() {
  return <PricingPage />
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Pricing' },
    { property: 'og:title', content: 'Pricing' },
    {
      name: 'description',
      content:
        'Discover pricing options for Akila Analytics and choose the plan that fits your needs.'
    }
  ]
}
