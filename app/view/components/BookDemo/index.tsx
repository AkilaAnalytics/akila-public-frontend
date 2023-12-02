import { Link } from '@remix-run/react'

export default function BookDemo() {
  return (
    <Link
      to="/product/watch-demo"
      className="button-gradient z-50 mx-auto my-auto flex w-full items-center justify-center rounded-md p-2 text-center text-xs uppercase tracking-widest hover:scale-105 md:w-auto md:whitespace-nowrap">
      Book a Demo
      <svg
        className="-mr-1 ml-2 h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </Link>
  )
}
