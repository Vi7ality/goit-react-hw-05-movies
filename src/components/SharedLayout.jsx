import { Link, Outlet } from "react-router-dom"

export const SharedLayout = () => {
    return (
        <div>
            <header>
                <Link to="/" end>Home</Link>
                <Link to='/movies'>Movies</Link>
            </header>
            <Outlet></Outlet>
        </div>

    )
}