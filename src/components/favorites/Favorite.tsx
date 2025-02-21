'use client'
import { removeFavorite } from '@/src/store/features/github-api/githubSlice'

import { useDispatch } from 'react-redux'
export default function Favorite({ fav }: { fav: string }) {
  const dispatch = useDispatch()
  const handleRemoveClick = (fav: string) => {
    dispatch(removeFavorite(fav))
  }
  return (
    <li className="flex border-[1px] rounded">
      <a
        className="p-4 w-full block hover:bg-gray-800 transition-all active:bg-gray-700 rounded-l"
        href={fav}
        target="_blank"
      >
        {fav}
      </a>
      <button
        className="py-2 px-4  bg-red-600 w-32 text-black rounded-r hover:bg-red-500 transition-all active:bg-red-400"
        onClick={() => handleRemoveClick(fav)}
      >
        Remove
      </button>
    </li>
  )
}
