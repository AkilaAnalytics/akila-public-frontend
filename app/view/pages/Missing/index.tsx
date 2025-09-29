import { Link } from "react-router";

import { rocketMan } from "~/view/assets/";

export default function MissingPage() {
  return (
    <div className="flex flex-col bg-black px-5 md:flex-row">
      <img
        src={rocketMan}
        alt="astronaut in space"
        className="mx-auto h-screen w-full  md:w-1/2"
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
  );
}
