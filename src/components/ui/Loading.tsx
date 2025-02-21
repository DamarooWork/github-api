import { InfinitySpin } from 'react-loader-spinner'

export default function Loading({
  width = '200',
}: {
  width: string | undefined
}) {
  return <InfinitySpin width={width} color="#fff" />
}
