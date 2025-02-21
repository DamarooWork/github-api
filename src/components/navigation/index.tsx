import Link from 'next/link'

export default function Index() {
  const linkClasses =
    'p-2 rounded will-change-transform hover:scale-105 hover:-translate-y-[2px] duration-200 hover:bg-gray-800'
  return (
    <header className="sticky top-0 left-0 min-h-[50px] flex justify-between items-center  px-[5vw] py-4 shadow-white shadow-lg mb-10 bg-[var(--background)] z-50">
      <h2 className="font-bold ">
        <Link className="p-2" href="/">
          Github Search
        </Link>
      </h2>
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
