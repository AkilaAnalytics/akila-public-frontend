import { Link } from '@remix-run/react'

interface inputs {
  text: string
  path: string
  background: boolean
}

export default function Button({ text, path, background }: inputs) {
  return (
    <Link to={path}>
      <button
        className={`mr-[12px] hover:scale-105 focus:scale-105 ${
          background
            ? 'w-full bg-gradient-to-r from-linkText to-primary'
            : 'border border-primary from-linkText to-primary hover:bg-gradient-to-r'
        } justify-center rounded-full box-decoration-slice px-6 py-3`}>
        <div className=" whitespace-nowrap text-sm font-medium">
          {text?.toUpperCase()}
        </div>
      </button>
    </Link>
  )
}
