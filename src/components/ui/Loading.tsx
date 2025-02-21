import { InfinitySpin } from 'react-loader-spinner'

export default function Loading({
  width = '200',
}: {
  width: string | undefined
}) {
  return (
    <InfinitySpin
      visible={true}
      width={width}
      color="#fff"
      ariaLabel="infinity-spin-loading"
    />
  )
}
