'use client'
import { useState, useEffect } from 'react'
import { useDebounce } from '../hooks/debounce'
import { useSearchUsersQuery } from '../store/features/github-api/github.api'
import Search from '@/src/components/homepage/search'
export default function Home() {
  const [search, setSearch] = useState<string>('')
  const debouced = useDebounce(search)
  const { isLoading, isError, data } = useSearchUsersQuery(debouced, {
    skip: debouced.length < 3
  })
  useEffect(() => {
    console.log(debouced)
  }, [debouced])
  return (
    <section className=" flex flex-col justify-center items-center">
      {isError && <p className="text-red-600">Something went wrong</p>}

      <Search search={search} setSearch={setSearch} isLoading={isLoading} data={data} />
    </section>
  )
}
