import { Routes, Route } from "react-router-dom"
// import {BrowserRouter as Router} from "react-router-dom"
import HomePage from "../pages/HomePage"
import ArtistsDetailPage from "../pages/ArtistDetailPage"
import Navbar from "../components/Navbar"


const AppRouter = () => {
    return (
        // <Router>
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/detail/:id" element={<ArtistsDetailPage />} />
            </Routes>
        </>

        // </Router>
    )
}

export default AppRouter