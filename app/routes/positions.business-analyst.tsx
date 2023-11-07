import { BusinessAnalystPage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default function BusinessAnalyst() {
  return <BusinessAnalystPage />
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Business Analyst Position' },
    { property: 'og:title', content: 'Business Analyst Position' },
    {
      name: 'description',
      content:
        'Leverage the power of Akila Analytics as a Business Analyst. Explore features tailored for business analysis tasks.'
    }
  ]
}
