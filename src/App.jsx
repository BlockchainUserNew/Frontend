import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import 'bootstrap/dist/css/bootstrap.min.css';
import PatientRegistration from "./pages/dashboard/Module/Patient";
import DoctorRegistration from "./pages/dashboard/Module/Doctor";
import LaboratoryRegistration from "./pages/dashboard/Module/Laboratory";
import { SignIn } from "./pages/auth";
import Register from "./layouts/register";
import Patient from "./layouts/patient";
import Doctor from "./layouts/doctor";
import Laboratory from "./layouts/laboratory";
// import Prescription from "./pages/dashboard/DoctorDashboard/Prescription";
function App() {

  return (

    <Routes>

      <Route path="/auth/*" element={<Auth />} />
      {/* <Route path="/register/*" element={<Register />} /> */}
      {/* <Route path="/dashboard/*" element={<Dashboard />} /> */}
      <Route path="/patient/*" element={<Patient />} />
      <Route path="/doctor/*" element={<Doctor />} />
      <Route path="/laboratory/*" element={<Laboratory />} />
      <Route path="/register/patient" element={<PatientRegistration />} />
      <Route path="/register/doctor" element={<DoctorRegistration />} />
      <Route path="/register/laboratory" element={<LaboratoryRegistration />} />
      {/* <Route path="/prescription" element={<Prescription />} /> */}
      <Route path="*" element={<Navigate to="/sign-in" replace />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
}

export default App;
