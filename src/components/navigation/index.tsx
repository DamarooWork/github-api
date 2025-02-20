import Link from 'next/link'
export default function Index() {
  const linkClasses =
    'border-2 p-2 rounded-2xl will-change-transform hover:scale-105 duration-200'
  return (
    <header className="stic min-h-[50px] flex justify-between items-center  p-4 shadow-white   shadow-md">
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
