import DashBoard from "../dashboard/dashboard";
import Login from "../login/login";
import Home from "../home/Home";
import { Routes, Route } from "react-router-dom";

function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}

export default PageRoutes;
