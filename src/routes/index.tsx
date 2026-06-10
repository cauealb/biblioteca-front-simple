import { BrowserRouter, Routes, Route } from "react-router-dom";

import LadingPage from "../pages/LandingPage/LadingPage";
import LoginPages from "../pages/Login/LoginPages";
import RegisterPages from "../pages/Register/RegisterPages";
import DashboardPages from "../pages/Dashboard/DashboardPages";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LadingPage />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/register" element={<RegisterPages />} />
        <Route path="/dashboard" element={<DashboardPages />}/>
      </Routes>
    </BrowserRouter>
  );
}
