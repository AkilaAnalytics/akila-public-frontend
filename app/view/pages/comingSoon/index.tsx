import { akilaAnalyticsLogo } from '~/view/assets'

export default function ComingSoonPage() {
  return (
    <div className="flex h-[80vh] items-center justify-center bg-black">
      <div>
        <div className="mb-10">
          <img src={akilaAnalyticsLogo} alt="Akila Analytics' logo" />
        </div>
        <div className="text-6xl">Coming Soon</div>
      </div>
    </div>
  )
}
