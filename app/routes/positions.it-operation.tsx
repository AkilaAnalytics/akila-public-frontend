import { ItOperationPage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default ItOperationPage

export const meta: MetaFunction = () => {
  const title = 'IT Operation Position'
  const description = 'Learn how executives in IT are leveraging Akila.'
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
