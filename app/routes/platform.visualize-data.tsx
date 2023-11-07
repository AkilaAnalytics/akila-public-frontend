import { VisualizeDataPage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default function VisualizaData() {
  return <VisualizeDataPage />
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Visualize Data' },
    { property: 'og:title', content: 'Visualize Data' },
    {
      name: 'description',
      content:
        'Visualize your data effectively using Akila Analytics tools. Turn your data into meaningful insights.'
    }
  ]
}
