import { useDebounce } from '@/src/hooks/debounce'
import { IUser } from '@/src/models/models'
import { useSearchUsersQuery } from '@/src/store/features/github-api/github.api'
import { useEffect, useState } from 'react'

export default function Index({
  handleUserClick,
}: {
  handleUserClick: (username: string) => void
}) {
  const [search, setSearch] = useState<string>('')
  const [dropDown, setDropDown] = useState(false)
  const debouced = useDebounce(search)
  const {
    isLoading: isUsersLoading,
    isError: isUsersError,
    data: users,
  } = useSearchUsersQuery(debouced, {
    skip: debouced.length < 2,
  })
  useEffect(() => {
    setDropDown(debouced.length > 1 && users?.length! > 0)
  }, [debouced, users])
  const handleClick = (username: string) => {
    handleUserClick(username)
    setDropDown(false)
  }
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
      {dropDown && (
        <ul className=" absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white text-gray-500  overflow-y-auto z-40">
          {isUsersLoading ? (
            <li className="py-2 px-4 text-center">Loading...</li>
          ) : (
            users?.map((user) => (
              <li
                onClick={() => handleClick(user.login)}
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
