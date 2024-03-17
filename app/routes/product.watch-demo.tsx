import { WatchDemoPage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default WatchDemoPage

export const meta: MetaFunction = () => {
  const title = 'Watch Akila Analytics Demo'
  const description =
    'Watch a comprehensive demo of Akila Analytics and discover how our platform can revolutionize your data science workflows.'
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
