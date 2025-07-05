import { MissingPage } from '~/view/pages/misc'

export default function MissingRoute() {
  return <MissingPage />
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Uh Oh | Missing Page' },
    {
      property: 'og:title',
      content: 'Uh Oh | Missing Page'
    },
    {
      name: 'description',
      content: "We're not sure how you got here but this page is missing"
    }
  ]
}
