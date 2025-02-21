'use client'
import { removeFavorite } from '@/src/store/features/github-api/githubSlice'
import { useAppSelector } from '@/src/store/hooks'
import { useDispatch } from 'react-redux'

export default function Index() {
  const { favourites } = useAppSelector((state) => state.github)
  const dispatch = useDispatch()
  const handleRemoveClick = (fav: string) => {
    dispatch(removeFavorite(fav))
  }
  return (
    <section className="mt-4 text-2xl">
      {favourites?.length ? (
        <ul className="flex flex-col gap-4  ">
          {favourites.map((fav, i) => (
            <li className="flex border-[1px] rounded" key={fav}>
              <a className="p-2 w-full block " href={fav} target="_blank">
                {i + 1}. {fav}
              </a>
              <button
                className="py-2 px-4  bg-red-500 w-32 text-black"
                onClick={() => handleRemoveClick(fav)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items U_U</p>
      )}
    </section>
  )
}
