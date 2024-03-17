import { DataSciencePage } from '~/view/pages/enterprise'
import { MetaFunction } from '@remix-run/node'

export default DataSciencePage

export const meta: MetaFunction = () => {
  const title = 'Enterprise Data Science'
  const description =
    'Empower your enterprise with advanced data science capabilities using Akila Analytics.'
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
