import { VisualizeDataPage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default function VisualizaData() {
  return <VisualizeDataPage />
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Visualize Data: Data Analysis Made Easy' },
    {
      property: 'og:title',
      content: 'Visualize Data: Data Analysis Made Easy'
    },
    {
      name: 'description',
      content:
        'Visualize your data effectively using Akila Analytics tools. Turn your data into meaningful insights.'
    }
  ]
}
