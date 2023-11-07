import { ByRolePage } from '~/view/pages/enterprise'
import { MetaFunction } from '@remix-run/node'

export default function ByRole() {
  return <ByRolePage />
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Enterprise by Role' },
    { property: 'og:title', content: 'Enterprise by Role' },
    {
      name: 'description',
      content:
        'Discover how different roles can utilize Akila Analytics in the enterprise environment.'
    }
  ]
}
