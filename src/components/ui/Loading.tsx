import { InfinitySpin } from 'react-loader-spinner'

export default function Loading({ width = 200 }: { width: number }) {
  return (
    <InfinitySpin
      visible={true}
      width={width}
      color="#fff"
      ariaLabel="infinity-spin-loading"
    />
  )
}
