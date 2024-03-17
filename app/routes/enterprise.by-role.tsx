import { ByRolePage } from '~/view/pages/enterprise'
import { MetaFunction } from '@remix-run/node'

export default ByRolePage

export const meta: MetaFunction = () => {
  const title = 'Enterprise by Role'
  const description =
    'Discover how different roles can utilize Akila Analytics in the enterprise environment.'
  return [
    { title },
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
