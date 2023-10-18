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
    <div className="flex gap-5">
      {buttons.map(({ text, path, background }, i) => (
        <Button key={path} text={text} path={path} background={background} />
      ))}
    </div>
  )
}
