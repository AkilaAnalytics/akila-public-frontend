import { DataScientistPage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default function DataScientist() {
  return <DataScientistPage />
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Data Scientist Position' },
    { property: 'og:title', content: 'Data Scientist Position' },
    {
      name: 'description',
      content:
        'Akila Analytics is seeking talented data scientists to join our team and shape the future of business analytics.'
    }
  ]
}
