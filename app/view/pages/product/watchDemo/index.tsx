import {
  DemoVideoImage,
  Fjord,
  Haes,
  Norsk,
  Solund,
  Wergerland
} from '~/view/assets'
import TrustedBySection from '~/view/components/TrustedBySection'

import { DemoPageFormDemoPageForm, DemoVideoOfAkilaSection } from './components'

export default function WatchDemo() {
  return (
    <div className="px-5">
      <div className="container_class">
        <div className="mt-[120px] flex flex-col justify-between gap-4 lg:flex-row ">
          <DemoPageFormDemoPageForm />
          <DemoVideoOfAkilaSection />
        </div>
        <TrustedBySection heading="Trusted Customers">
          <img src={Fjord} alt="" />
          <img src={Norsk} alt="" />
          <img src={Solund} alt="" />
          <img src={Haes} alt="" />
          <img src={Wergerland} alt="" />
        </TrustedBySection>
      </div>
    </div>
  )
}
