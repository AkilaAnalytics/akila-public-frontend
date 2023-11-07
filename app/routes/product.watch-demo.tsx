import { WatchDemoPage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default function WatchDemo() {
  return <WatchDemoPage />
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Watch Akila Analytics Demo' },
    { property: 'og:title', content: 'Watch Akila Analytics Demo' },
    {
      name: 'description',
      content:
        'Watch a comprehensive demo of Akila Analytics and discover how our platform can revolutionize your data science workflows.'
    }
  ]
}
