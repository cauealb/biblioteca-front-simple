import { BrowserRouter, Routes, Route } from "react-router-dom";

import LadingPage from "../pages/LandingPage/LadingPage";
import LoginPages from "../pages/Login/LoginPages";
import RegisterPages from "../pages/Register/RegisterPages";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LadingPage />} />

        <Route path="/login" element={<LoginPages />} />
        <Route path="/register" element={<RegisterPages />} />
      </Routes>
    </BrowserRouter>
  );
}
