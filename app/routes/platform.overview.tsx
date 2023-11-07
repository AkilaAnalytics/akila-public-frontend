import { PlatformOverviewPage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default function Overview() {
  return <PlatformOverviewPage />
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Platform Overview' },
    { property: 'og:title', content: 'Platform Overview' },
    {
      name: 'description',
      content:
        'Discover the full capabilities of Akila Analytics platform. Get a holistic view of our robust and comprehensive data science platform.'
    }
  ]
}
