import { useDebounce } from '@/src/hooks/debounce'
import { useSearchUsersQuery } from '@/src/store/features/github-api/github.api'
import { ChangeEvent, memo, useRef, useState } from 'react'
import Loading from '../../ui/Loading'
import { useClickOutside } from '@/src/hooks/useClickOutside'

export default memo(function Index({
  handleUserClick,
}: {
  handleUserClick: (username: string) => void
}) {
  const [search, setSearch] = useState<string>('')
  const [dropDown, setDropDown] = useState(false)
  const ref = useRef<HTMLElement>(null)
  useClickOutside(ref, () => setDropDown(false))
  const debounced = useDebounce(search)
  const {
    isLoading: isUsersLoading,
    isError: isUsersError,
    data: users,
  } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 2,
  })
  const handleClick = (username: string) => {
    setSearch(username)
    handleUserClick(username)
    setDropDown(false)
  }
  const handleInputClick = () => {
    setDropDown(
      debounced.length > 1 && users !== undefined && users?.length > 0
    )
  }
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDropDown(
      debounced.length > 1 && users !== undefined && users?.length > 0
    )
    setSearch(e.target.value)
  }
  return (
    <section ref={ref} className="relative w-[90vw]">
      <input
        onClick={handleInputClick}
        className="border py-2 px-4 w-full h-[100px] mb-2 text-[var(--background)] text-2xl sm:text-6xl placeholder:text-center text-center outline-green-200 rounded"
        placeholder="Search for Github username"
        type="text"
        value={search}
        onChange={(e) => handleInputChange(e)}
      />
      {isUsersError && <p className="text-red-600">Something went wrong</p>}
      {dropDown && (
        <ul
          key={debounced}
          className=" absolute top-[100px] left-0 right-0 max-h-[60vh] shadow-md bg-white text-gray-500  overflow-y-auto z-40 text-2xl sm:text-5xl"
        >
          {isUsersLoading ? (
            <li className="py-2 px-4 text-center">
              <Loading width={'200'} />
            </li>
          ) : (
            users?.map((user) => (
              <li
                onClick={() => handleClick(user.login)}
                key={user.id}
                className="py-2 px-4 hover:bg-gray-500 active:bg-gray-400 hover:text-white transition-colors duration-200 cursor-pointer text-center"
              >
                {user.login}
              </li>
            ))
          )}
        </ul>
      )}
    </section>
  )
})
