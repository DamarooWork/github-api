import { IRepo } from '@/src/models/models'
import RepoCard from './RepoCard'

export default function Index({
  repos,
  areReposLoading,
}: {
  repos: IRepo[] | undefined
  areReposLoading: boolean
}) {
  return (
    <section className="relative w-[560px] mt-4">
      {areReposLoading && <p className="text-center">Repos are loading...</p>}
      {repos?.length && (
        <ul className="flex flex-col gap-5 ">
          {repos.map((repo: IRepo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </ul>
      )}
    </section>
  )
}
