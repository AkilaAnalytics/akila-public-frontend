import { TryFreePage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default function TryFree() {
  return <TryFreePage />
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Try Akila Analytics for Free' },
    { property: 'og:title', content: 'Try Akila Analytics for Free' },
    {
      name: 'description',
      content:
        'Experience the power of Akila Analytics. Sign up now for a free trial and see the difference for yourself.'
    }
  ]
}
