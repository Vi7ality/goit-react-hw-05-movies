import { Link, Outlet } from "react-router-dom"

export const SharedLayout = () => {
    return (
        <div>
            <header>
                <Link to="/goit-react-hw-05-movies">Home</Link>
                <Link to='/movies'>Movies</Link>
            </header>
            <Outlet></Outlet>
        </div>

    )
}