import { IRepo } from '@/src/models/models'
import RepoCard from './RepoCard'
import Loading from '../../ui/Loading'

export default function Index({
  repos,
  areReposLoading,
}: {
  repos: IRepo[] | undefined
  areReposLoading: boolean
}) {
  return (
    <section className="relative w-[90vw] mt-4 flex justify-center items-center">
      {areReposLoading ? (
        <p className="text-center">
          <Loading width={'200'} />
        </p>
      ) : repos?.length ? (
        <ul className="flex gap-5 flex-col ">
          {repos.map((repo: IRepo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </ul>
      ) : (
        <p className="text-2xl">No repositories founded U_U</p>
      )}
    </section>
  )
}
