import { DataProcessingPage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default function DataProcessing() {
  return <DataProcessingPage />
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Data Processing' },
    { property: 'og:title', content: 'Data Processing' },
    {
      name: 'description',
      content:
        'Process vast amounts of data with ease. Akila Analytics provides powerful tools for data cleansing, transformation, and more.'
    }
  ]
}
