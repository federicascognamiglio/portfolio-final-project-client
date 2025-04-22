import { NavLink } from "react-router-dom"

function AppHeader() {
    return (
        <header className="header">
            <nav className="d-flex align-center">
                <img className="logo" src="/img/scg-logo-white.png" alt="SCG Logo" />
                <ul className="d-flex">
                    <li className="nav-link"><NavLink to="/">Home</NavLink></li>
                    <li className="nav-link"><NavLink to="/reel">Reel</NavLink></li>
                    <li className="nav-link"><NavLink to="/projects">Projects</NavLink></li>
                    <li className="nav-link"><NavLink to="/about">About</NavLink></li>
                </ul>
            </nav> 
        </header>
    )
}

export default AppHeader