import { Outlet } from "react-router-dom"

// Components
import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"

function MainLayout() {
    return (
        <>
            <header>
                <AppHeader />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <AppFooter />
            </footer>
        </>
    )
}

export default MainLayout