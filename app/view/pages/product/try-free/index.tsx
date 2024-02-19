import TrustedBySection from '~/view/components/TrustedBySection'
import { TryAkilaForFreeSection } from './components'
import { Fjord, Haes, Norsk, Solund, Wergerland } from '~/view/assets'

export default function TryFree() {
  return (
    <div>
      <TryAkilaForFreeSection />
      <TrustedBySection>
        <img src={Fjord} alt="" />
        <img src={Norsk} alt="" />
        <img src={Solund} alt="" />
        <img src={Haes} alt="" />
        <img src={Wergerland} alt="" />
      </TrustedBySection>
    </div>
  )
}
