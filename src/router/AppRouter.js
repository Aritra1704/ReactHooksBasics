import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BootStrapButtonPage from "../components/BootStrapButtonPage";
import NoteApp from "../components/NoteApp";
import Header from "../components/Header";

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<NoteApp />} exact={true} />
                    <Route path="/buttons" element={<BootStrapButtonPage />} />
                </Routes>
            </div>
        </Router>
    )
}

export {AppRouter as default};