import { Link } from '@remix-run/react'
import Button from '../Button'

export default function ButtonBar() {
  const buttons = [
    {
      text: 'Request a Demo',
      path: '/product/watch-demo',
      background: true
    },
    {
      text: 'Sign Up',
      path: '/contact-us',
      background: false
    }
  ]

  return (
    <div className="flex gap-2">
      <Link
        to="/contact-us"
        className="whitespace-nowrap rounded-full border-[1px] border-periwinkle px-10 py-2 hover:scale-105 hover:bg-periwinkle hover:text-white">
        Sign Up
      </Link>
      <Link
        to="/product/watch-demo"
        className="hover:bg-gradient-to-r whitespace-nowrap rounded-full border border-primary from-linkText to-primary px-10 py-2 hover:bg-[#3bb3c1]">
        Request Demo
      </Link>
    </div>
  )
}
