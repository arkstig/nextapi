import Link from 'next/link'

const Navigation = () => {
    return (
        <nav className="navigation p-5 flex gap-2.5 bg-white">
            <Link legacyBehavior href="/">
                <a className="py-1 px-4 bg-gray-900 text-gray-100 rounded-sm hover:bg-gray-800 hover:text-white">
                    Home
                </a>
            </Link>

            <Link legacyBehavior href="/countries">
                <a className="py-1 px-4 bg-gray-900 text-gray-100 rounded-sm hover:bg-gray-800 hover:text-white">
                    Countries
                </a>
            </Link>
        </nav>
    )
}

export default Navigation
