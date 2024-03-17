import { PlatformOverviewPage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default PlatformOverviewPage

export const meta: MetaFunction = () => {
  const title = 'AI Data Analysis: Simplify Your Data Analytics Journey'
  const description =
    'Explore AI Data Analysis with Akila. Gain a comprehensive understanding of our powerful data science tools designed for ease of use and robust insights.'
  return [
    { title },
    {
      name: 'og:title',
      content: title
    },
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
