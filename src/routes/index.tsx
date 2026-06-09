import { BrowserRouter, Routes, Route } from "react-router-dom";

import LadingPage from "../modules/Landing Page/pages/LadingPage";
import LoginPages from "../modules/Login/pages/LoginPages";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/"
                    element={<LadingPage />}
                />

                <Route 
                    path="/login"
                    element={<LoginPages />}
                />
            </Routes>
        
        </BrowserRouter>
    )
}