import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import ArtistsDetailPage from "../pages/ArtistDetailPage"
import Navbar from "../components/Navbar"


const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/detail/:id" element={<ArtistsDetailPage />} />
            </Routes>
        </>
    )
}

export default AppRouter