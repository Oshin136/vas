import DashBoard from "../dashboard/dashboard";
import Login from "../login/login";
import Home from "../home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import CreateNewPatient from "../managePatient/CreateNewPatient";
import PatientList from "../managePatient/PatientList";
import UserRegister from "../user/UserRegister";
import VaccineForm from "../vaccines/VaccineForm";
import VaccineList from "../vaccines/VaccineList";

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
      <Route path="/create" element={<CreateNewPatient />} />
      <Route path="/patientlist" element={<PatientList />} />
      <Route path="/register" element={<UserRegister />} />
      <Route path="/vaccine" element={<VaccineForm />} />
      <Route path="/vaccinelist" element={<VaccineList />} />
    </Routes>
  );
}

export default PageRoutes;
