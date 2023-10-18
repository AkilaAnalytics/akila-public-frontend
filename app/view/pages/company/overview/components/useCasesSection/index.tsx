import { Button, CenterAlignHeadingDescription } from '~/view/components'

export default function UseCasesSection({ children, heading, description }) {
  return (
    <div className="container_class">
      <div className="my-[50px]">
        <CenterAlignHeadingDescription
          heading={heading}
          description={description}
        />
        {children}
      </div>
    </div>
  )
}
