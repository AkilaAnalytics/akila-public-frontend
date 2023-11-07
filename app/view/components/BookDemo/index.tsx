import { Link } from '@remix-run/react'

export default function BookDemo() {
  return (
    <Link to="/product/watch-demo" className="z-50">
      <button className="button-gradient my-auto flex w-full items-center whitespace-nowrap rounded-md p-2 text-xs uppercase hover:scale-105 md:w-auto">
        Book a Demo
        <svg
          className="-mr-1 ml-2 h-5 w-5"
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
      </button>
    </Link>
  )
}
