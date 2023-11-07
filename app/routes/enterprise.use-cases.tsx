import { UseCasesPage } from '~/view/pages/enterprise'
import { MetaFunction } from '@remix-run/node'

export default function UseCases() {
  return <UseCasesPage />
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Enterprise Use Cases' },
    { property: 'og:title', content: 'Enterprise Use Cases' },
    {
      name: 'description',
      content:
        'Discover the variety of enterprise use cases that Akila Analytics supports.'
    }
  ]
}
