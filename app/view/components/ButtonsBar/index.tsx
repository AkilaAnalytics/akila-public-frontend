import { Link } from '@remix-run/react'

export default function ButtonBar() {
  return (
    <div className="flex gap-2">
      <a
        href="https://app.akilaanalytics.com/auth/login"
        className="whitespace-nowrap rounded-full border-[1px] border-periwinkle bg-periwinkle px-10 py-2 hover:scale-105 hover:bg-white hover:text-periwinkle"
        target="_blank">
        Sign Up
      </a>
      <Link
        to="/product/watch-demo"
        className="whitespace-nowrap rounded-full border border-turqoise bg-turqoise px-10 py-2 hover:bg-white hover:text-turqoise">
        Request Demo
      </Link>
    </div>
  )
}
