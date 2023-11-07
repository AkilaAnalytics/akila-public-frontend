import { IntegrateDataPage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default function IntegrateData() {
  return <IntegrateDataPage />
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Integrate Data' },
    { property: 'og:title', content: 'Integrate Data' },
    {
      name: 'description',
      content: 'Seamlessly integrate your data with Akila Analytics.'
    }
  ]
}
