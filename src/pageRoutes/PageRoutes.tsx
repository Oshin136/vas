import DashBoard from "../components/dashboard/dashboard";
import Login from "../components/login/login";
import Home from "../components/home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import CreateNewPatient from "../components/managePatient/CreateNewPatient";
import PatientList from "../components/managePatient/PatientList";
import UserRegister from "../components/user/UserRegister";
import VaccineForm from "../components/vaccines/VaccineForm";
import VaccineList from "../components/vaccines/VaccineList";
import CreateNewAppointment from "../components/appointments/CreateNewAppointment";
import AppointmentList from "../components/appointments/AppointmentList";
import AppointmentCalendar from "../components/appointments/AppointmentCalendar";
import UserAppointment from "../components/appointments/UserAppointment";
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
      <Route path="/user-appointment" element={<UserAppointment />} />
      <Route path="/vaccine" element={<VaccineForm />} />
      <Route path="/vaccinelist" element={<VaccineList />} />
      <Route path="/new-appointment" element={<CreateNewAppointment />} />
      <Route path="/appointmentlist" element={<AppointmentList />} />
      <Route path="/appointment-calendar" element={<AppointmentCalendar />} />
    </Routes>
  );
}

export default PageRoutes;
