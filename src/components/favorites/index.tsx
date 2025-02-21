'use client'
import { useAppSelector } from '@/src/store/hooks'
import Favorite from './Favorite'
export default function Index() {
  const { favourites } = useAppSelector((state) => state.github)

  return (
    <section className="mt-4 text-2xl">
      {favourites?.length ? (
        <ul className="flex flex-col gap-4  ">
          {favourites.map((fav) => (
            <Favorite key={fav} fav={fav} />
          ))}
        </ul>
      ) : (
        <p>No favourites U_U</p>
      )}
    </section>
  )
}
