import Link from 'next/link'

const Navigation = () => {
    return (
        <nav className="navigation flex gap-2.5 bg-slate-600">
            <Link className="hover:text-slate-200" legacyBehavior href="/">
                <a>Home</a>
            </Link>

            <Link legacyBehavior href="/countries">
                <a className="first">Countries</a>
            </Link>
        </nav>
    )
}

export default Navigation
