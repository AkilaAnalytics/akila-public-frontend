import { PricingPage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default PricingPage

export const meta: MetaFunction = () => {
  const title = 'Pricing: No-Code Data Science Platform'
  const description =
    'Discover pricing options for Akila Analytics and choose the plan that fits your needs.'
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
