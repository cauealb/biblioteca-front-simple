import { BrowserRouter, Routes, Route } from "react-router-dom";

import LadingPage from "../pages/LandingPage/LadingPage";
import LoginPages from "../pages/Login/LoginPages";
import RegisterPages from "../pages/Register/RegisterPages";
import DashboardPages from "../pages/Dashboard/DashboardPages";
import DashboardsBooksPages from "../pages/DashboardBooks/DashboardsBooksPages";
import MyBookcase from "../pages/MyBookcase/MyBookcase";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LadingPage />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/register" element={<RegisterPages />} />
        
        <Route path="/dashboard" element={<DashboardPages />}>
          <Route 
            path="best-books"
            element={<DashboardsBooksPages />}
          />

          <Route 
            path="my-bookcase"
            element={<MyBookcase />}
          />
        </Route>

        {/* <Route path="/dashboard/my-bookcase" element={<DashboardPages />}/>
        <Route path="/dashboard/config" element={<DashboardPages />}/> */}
      </Routes>
    </BrowserRouter>
  );
}
