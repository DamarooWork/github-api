import { IRepo } from '@/src/models/models'

export default function RepoCard({ repo }: { repo: IRepo }) {
  return (
    <li className="">
      <a
        className="p-4 flex flex-col  border-2 rounded hover:shadow-md hover:bg-gray-800 transition-all"
        href={repo.html_url}
        target="_blank"
      >
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="">
          Forks: <span className="font-bold mr-4">{repo.forks}</span>
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="font-thin">{repo?.description}</p>
      </a>
    </li>
  )
}
