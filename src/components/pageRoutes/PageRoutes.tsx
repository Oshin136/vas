import DashBoard from "../dashboard/dashboard";
import Login from "../login/login";
import Home from "../home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import ManagePatient from "../managePatient/managePatient";

function PageRoutes() {
  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true" ? true : false;
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={isLoggedIn ? <Home /> : <Navigate to={"/"} />}
      />
      <Route path="*" element={<h1>Page Not Found</h1>} />
      <Route path="/create" element={<ManagePatient />} />
    </Routes>
  );
}

export default PageRoutes;
