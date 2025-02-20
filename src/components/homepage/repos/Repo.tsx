import { IRepo } from '@/src/models/models'

export default function Repo({ repo }: { repo: IRepo }) {
  return (
    <li key={repo.id} className="flex flex-col items-center">
      <h3>{repo.name}</h3>
      <a href={repo.git_url}>{repo.git_url}</a>
    </li>
  )
}
