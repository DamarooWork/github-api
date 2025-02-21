'use client'
import Search from '@/src/components/homepage/search'
import Repos from '@/src/components/homepage/repos'

import { useLazyGetUserReposQuery } from '../store/features/github-api/github.api'
import { useCallback } from 'react'

export default function Home() {
  const [fetchRepos, { isLoading: areReposLoading, data: repos }] =
    useLazyGetUserReposQuery()

  const handleUserClick = useCallback((username: string) => {
    fetchRepos(username)
  }, [fetchRepos])
  return (
    <section className=" flex flex-col justify-center items-center">
      <Search handleUserClick={handleUserClick} />
      <Repos repos={repos} areReposLoading={areReposLoading} />
    </section>
  )
}
