import { IRepo } from '@/src/models/models'
import Repo from './Repo'

export default function index({
  repos,
  areReposLoading,
}: {
  repos: IRepo[] | undefined
  areReposLoading: boolean
}) {
  return (
    <section className="relative w-[560px]">
      {areReposLoading && <p className="text-center">Repos are loading...</p>}
      {repos?.length && (
        <ul>
          {repos.map((repo: IRepo) => (
           <Repo repo={repo}/>
          ))}
        </ul>
      )}
    </section>
  )
}
