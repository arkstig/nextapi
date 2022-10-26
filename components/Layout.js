import Navigation from './Navigation'

const Layout = ({ children }) => {
    return (
        <>
            <Navigation />
            <main className="p-5 layout">{children}</main>
        </>
    )
}

export default Layout
