import { IUser } from '@/src/models/models'
import { useState } from 'react'

export default function Index({
  search,
  setSearch,
  isLoading,
  data,
}: {
  search: string
  setSearch: (str: string) => void
  isLoading: boolean
  data: IUser[] | undefined
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
      {search.length > 2 && (
        <ul className=" absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white text-gray-500  overflow-y-auto">
          {isLoading ? (
            <li className="py-2 px-4">Loading...</li>
          ) : (
            data?.map((user) => (
              <li
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
