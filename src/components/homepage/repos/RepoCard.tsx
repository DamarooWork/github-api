import { IRepo } from '@/src/models/models'
import {
  addFavorite,
  removeFavorite,
} from '@/src/store/features/github-api/githubSlice'
import { useAppSelector } from '@/src/store/hooks'
import { useDispatch } from 'react-redux'

export default function RepoCard({ repo }: { repo: IRepo }) {
  const { favourites } = useAppSelector((state) => state.github)
  const dispatch = useDispatch()
  const handleAddClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    dispatch(addFavorite(repo.html_url))
  }
  const handleRemoveClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    dispatch(removeFavorite(repo.html_url))
  }
  return (
    <li className="border-2 rounded max-w-[600px] hover:shadow-md hover:bg-gray-800 transition-all">
      <a
        className="p-4 flex flex-col justify-between gap-2 h-full"
        href={repo.html_url}
        target="_blank"
      >
        <h2 className="text-xl font-bold">{repo.full_name}</h2>
        <p className="">
          Forks: <span className="font-bold mr-4">{repo.forks}</span>
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        {repo.description && (
          <>
            <h3 className="text-xl">Description:</h3>
            <p className="font-[200] italic "> {repo?.description}</p>
          </>
        )}
        {favourites.includes(repo.html_url) ? (
          <button
            className="py-2 px-4  rounded bg-red-500 w-32 text-black"
            onClick={handleRemoveClick}
            title="Remove from favorites"
          >
            Remove
          </button>
        ) : (
          <button
            className="py-2 px-4  rounded bg-yellow-500 w-32 text-black"
            onClick={handleAddClick}
            title="Add to favorites"
          >
            Add
          </button>
        )}
      </a>
    </li>
  )
}
