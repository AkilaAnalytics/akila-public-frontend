import { Link } from '@remix-run/react'

import { RocketMan } from '~/view/assets/'

export default function MissingPage() {
  return (
    <div className="flex flex-col md:flex-row bg-black">
      <img
        src={RocketMan}
        alt="astronaut in space"
        className="h-full w-full md:h-3/4 md:w-1/2 mx-auto"
      />
      <div className="mx-auto my-auto">
        <h3>
          Uh Oh, Cleavis! You&apos;re Lost <br /> <br />
        </h3>
        The page you are looking for does not exist. How you got here is a
        mystery. <br /> But you can click the button below to go back to the
        homepage. <br /> <br />
        <Link to="/" className="text-blue-500">
          Go Home
        </Link>
      </div>
    </div>
  )
}
