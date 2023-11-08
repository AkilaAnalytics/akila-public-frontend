import { Link } from '@remix-run/react'

export default function ButtonBar() {
  return (
    <div className="flex gap-2">
      <a
        href="https://app.akilaanalytics.com/auth/login"
        className="button-gradient hover:button-gradient-hover whitespace-nowrap rounded-full px-10 py-2 text-xs uppercase hover:scale-105"
        target="_blank">
        Sign Up
      </a>
      <Link
        to="/product/watch-demo"
        className="cyan-gradient hover:cyan-gradient-hover whitespace-nowrap rounded-full px-10 py-2 text-xs uppercase">
        Request Demo
      </Link>
    </div>
  )
}
