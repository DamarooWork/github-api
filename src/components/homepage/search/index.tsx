import { IUser } from '@/src/models/models'

export default function Index({
  search,
  setSearch,
  isUsersLoading,
  isUsersError,
  users,
  fetchRepos,
}: {
  search: string
  setSearch: (str: string) => void
  isUsersLoading: boolean
  isUsersError: boolean
  users: IUser[] | undefined
  fetchRepos: (username: string) => void
}) {
  return (
    <section className="relative w-[560px]">
      <input
        className="border py-2 px-4 w-full h-[42px] mb-2 text-[var(--background)]"
        placeholder="Search for Github username"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {isUsersError && <p className="text-red-600">Something went wrong</p>}
      {search.length > 2 && (
        <ul className=" absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white text-gray-500  overflow-y-auto z-40">
          {isUsersLoading ? (
            <li className="py-2 px-4 text-center">Loading...</li>
          ) : (
            users?.map((user) => (
              <li
                onClick={() => fetchRepos(user.login)}
                key={user.id}
                className="py-2 px-4 hover:bg-gray-500 active:bg-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {user.login}
              </li>
            ))
          )}
        </ul>
      )}
    </section>
  )
}
