import Link from 'next/link'

export default function Index() {
  const linkClasses =
    'p-2 rounded will-change-transform hover:scale-105 hover:-translate-y-[2px] duration-200 hover:bg-gray-800'
  return (
    <header className="sticky min-h-[50px] flex justify-between items-center  p-4 shadow-white shadow-md mb-10">
      <h3 className="font-bold">Github Search</h3>
      <nav className="flex gap-5">
        <Link className={linkClasses} href="/">
          Home
        </Link>
        <Link className={linkClasses} href="/favorites">
          Favorites
        </Link>
      </nav>
    </header>
  )
}
