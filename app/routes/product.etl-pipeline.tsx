import type { MetaFunction } from '@remix-run/node'

import { EtlPipeline } from '~/view/pages'

export default EtlPipeline

export const meta: MetaFunction = () => {
  const title = 'ETL Pipelines'
  const description =
    'Build ETL pipelines and optimize data pipeline architecture with ease using Akila.'
  return [
    { title },
    {
      property: 'og:title',
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
