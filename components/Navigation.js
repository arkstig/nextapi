import Link from 'next/link'

const Navigation = () => {
    return (
        <nav className="navigation">
            <Link legacyBehavior href="/">
                <a>Hjem</a>
            </Link>

            <Link legacyBehavior href="/countries">
                <a className="first">Countries</a>
            </Link>

            <Link legacyBehavior href="/createcountry">
                <a className="second">Add Country</a>
            </Link>
        </nav>
    )
}

export default Navigation
