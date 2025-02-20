'use client'
import Search from '@/src/components/homepage/search'
import Repos from '@/src/components/homepage/repos'

import { useState, useEffect } from 'react'
import { useDebounce } from '../hooks/debounce'
import {
  useLazyGetUserReposQuery,
  useSearchUsersQuery,
} from '../store/features/github-api/github.api'

export default function Home() {
  const [search, setSearch] = useState<string>('')
  const debouced = useDebounce(search)
  const {
    isLoading: isUsersLoading,
    isError: isUsersError,
    data: users,
  } = useSearchUsersQuery(debouced, {
    skip: debouced.length < 3,
  })
  const [fetchRepos, { isLoading: areReposLoading, data: repos }] =
    useLazyGetUserReposQuery()
  useEffect(() => {
    console.log(debouced)
  }, [debouced])
  return (
    <section className=" flex flex-col justify-center items-center">
     

      <Search
        search={search}
        isUsersError={isUsersError}
        setSearch={setSearch}
        isUsersLoading={isUsersLoading}
        users={users}
        fetchRepos={(username) => fetchRepos(username)}
      />
      <Repos repos={repos} areReposLoading={areReposLoading}/>
    </section>
  )
}
