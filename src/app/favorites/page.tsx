'use client'
import Favorites from '@/src/components/favorites'

export default function page() {
  return (
    <section className="flex flex-col  items-center">
      <h1 className="text-3xl font-bold">Favorites</h1>
      <Favorites />
    </section>
  )
}
