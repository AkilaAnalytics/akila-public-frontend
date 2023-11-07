import ComingSoonPage from '~/view/pages/comingSoon'
import { MetaFunction } from '@remix-run/node'

export default function Documentation() {
  return <ComingSoonPage />
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Documentation' },
    { property: 'og:title', content: 'Documentation' },
    {
      name: 'description',
      content:
        'Access comprehensive documentation for Akila Analytics. Learn how to get started, best practices, and more.'
    }
  ]
}
