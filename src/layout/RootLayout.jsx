import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"
function RootLayout() {
  return (
    <>
        <Navbar/>
        <main className="cite-container">
            <Outlet/>
        </main>
    </>
  )
}

export default RootLayout