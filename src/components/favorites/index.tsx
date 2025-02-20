'use client'
import { useAppSelector } from '@/src/store/hooks'

export default function index() {
  const { favourites } = useAppSelector((state) => state.github)

  return (
    <section className="mt-4 text-2xl">
      {favourites?.length ? (
        <ul className="flex flex-col gap-2">
          {favourites.map((fav, i) => (
            <li className=" border-b-[1px] pb-2" key={fav}>
              <a className="p-2 w-full block" href={fav} target="_blank">
                {i + 1}. {fav}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items U_U</p>
      )}
    </section>
  )
}
