import { PricingPage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default function Pricing() {
  return <PricingPage />
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Pricing: No-Code Data Science Platform' },
    { property: 'og:title', content: 'Pricing: No-Code Data Science Platform' },
    {
      name: 'description',
      content:
        'Discover pricing options for Akila Analytics and choose the plan that fits your needs.'
    }
  ]
}
