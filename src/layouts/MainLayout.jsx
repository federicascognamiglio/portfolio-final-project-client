import { Outlet } from "react-router-dom"

// Components
import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"

function MainLayout() {
    return (
        <div className="wrapper">
            {/* Header */}
            <AppHeader />
            {/* Main */}
            <main>
                <Outlet />
            </main>
            {/* Footer */}
            {/* <footer>
                <AppFooter />
            </footer> */}
        </div>
    )
}

export default MainLayout