import { DataScientistPage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default DataScientistPage

export const meta: MetaFunction = () => {
  const title = 'Data Scientist Position'
  const description =
    'Akila Analytics is seeking talented data scientists to join our team and shape the future of business analytics.'
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
