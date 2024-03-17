import { UseCasesPage } from '~/view/pages/enterprise'
import { MetaFunction } from '@remix-run/node'

export default UseCasesPage

export const meta: MetaFunction = () => {
  const title = 'Enterprise Use Cases'
  const description =
    'Discover the variety of enterprise use cases that Akila Analytics supports.'
  return [
    { title },
    { property: 'og:title', title },
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
