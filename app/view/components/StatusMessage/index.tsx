import { StatusMessageTypes } from '~/utils'

interface IProps {
  type: StatusMessageTypes
  message: string
}

const baseStyle = 'min-w-full p-2 text-center rounded-md'

export default function StatusMessage({ type, message }: IProps) {
  if (type === StatusMessageTypes.SUCCESS) {
    return (
      <span className={`${baseStyle} bg-green-200 text-green-900`}>
        {message}
      </span>
    )
  }
  if (type === StatusMessageTypes.ERROR) {
    return (
      <span className={`${baseStyle} bg-red-200 text-red-900`}>{message}</span>
    )
  }
  if (type === StatusMessageTypes.INFO) {
    return (
      <span className={`${baseStyle} bg-blue-200 text-blue-900`}>
        {message}
      </span>
    )
  }
  if (type === StatusMessageTypes.WARNING) {
    return (
      <span className={`${baseStyle} bg-yellow-200 text-yellow-900`}>
        {message}
      </span>
    )
  }
  return <></>
}
