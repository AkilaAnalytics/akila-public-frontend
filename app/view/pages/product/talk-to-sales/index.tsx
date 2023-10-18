import { TalkToSalesBg, fjord, norsk } from '~/view/assets'
import { TalkToSalesBanner, TalkToSalesForm } from './components'
import TrustedBySection from '~/view/components/TrustedBySection'

export default function TalkToSales() {
  return (
    <>
      <TalkToSalesBanner
        title="You have questions.We have answers."
        subTitle="Akila is designed to be user-friendly and not require training, but if you have questions, we're here to help"
        image={TalkToSalesBg}>
        <TalkToSalesForm />
      </TalkToSalesBanner>
      <TrustedBySection heading="Trusted by">
        <img src={fjord} alt="" />
        <img src={fjord} alt="" />
        <img src={fjord} alt="" />
        <img src={fjord} alt="" />
      </TrustedBySection>
    </>
  )
}
