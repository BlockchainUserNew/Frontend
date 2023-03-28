import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import Module from "./pages/dashboard/Module";
import Patient from "./pages/dashboard/Module/Patient";
import Doctor from "./pages/dashboard/Module/Doctor";
import Laboratory from "./pages/dashboard/Module/Laboratory";
import PatientHistory from "./pages/dashboard/PatientDashboard/PatientHistory";
import DoctorDetails from "./pages/dashboard/DoctorDashboard/DoctorDetails";
import PatientDetails from "./pages/dashboard/PatientDashboard/PatientDetails";
import PatientInfo from "./pages/dashboard/DoctorDashboard/PatientInfo";
import Prescription from "./pages/dashboard/DoctorDashboard/Prescription";
import PatientList from "./pages/dashboard/Laboratory Dashboard/PatientsList";
import LaboratoryDetails from "./pages/dashboard/Laboratory Dashboard/LaboratoryDetails";
// import ViewPatient from "./pages/dashboard/PatientDashboard/ViewPatientDetails";


const icon = {
  className: "w-5 h-5 text-inherit",
};
let userType = localStorage.getItem("userType")
console.log(userType, "hiiii");
export const routes = [
  // userType === "Patient" &&
  {
    title: "Patient Dashboard",
    layout: "patient",
    pages: [
    //  userType === "Patient" && 
     {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "Patient Details",
        path: "/details",
        element: <PatientDetails />,
      },
      // userType === "Patient" &&
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "Patient History",
        path: "/history",
        element: <PatientHistory />,
      },
      // {
      //   icon: <ArrowRightOnRectangleIcon {...icon} />,
      //   name: "View Patient Details",
      //   path: "/view/patient",
      //   element: <ViewPatient />,
      // },
    ],
  },

  
  // userType === "Doctor" &&
  {
    title: "Doctor Dashboard",
    layout: "doctor",
    pages: [
      // userType === "Doctor" &&
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "Doctor Details",
        path: "/details",
        element: <DoctorDetails />,
      },
      // userType === "Doctor" &&
       {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "Patient Info",
        path: "/patient-info",
        element: <PatientInfo />,
      },
      // userType === "Doctor" &&
      {
        // icon: <ArrowRightOnRectangleIcon {...icon} />,
        // name: "Patient Info",
        path: "/prescription",
        element: <Prescription />,
      },
    ],
  },
  // userType === "Laboratory" &&
  {
    title: "Laboratory Dashboard",
    layout: "laboratory",
    pages: [
      // userType === "Laboratory" &&
       {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "Laboratory Details",
        path: "/details",
        element: <LaboratoryDetails />,
      },
      // userType === "Laboratory" && 
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "Patient List",
        path: "/patient-list",
        element: <PatientList />,
      },
    ],
  },
  // userType === "" &&
  // {
  //   title: "Registration",
  //   layout: "register",
  //   pages: [
  //     // userType === "" &&
  //     {
  //       icon: <BellIcon {...icon} />,
  //       name: "Patient",
  //       path: "/patient",
  //       element: <Patient />,
  //     },
  //     // userType === "" && 
  //     {
  //       icon: <BellIcon {...icon} />,
  //       name: "Doctor",
  //       path: "/doctor",
  //       element: <Doctor />,
  //     },
  //     // userType === "" &&
  //     {
  //       icon: <BellIcon {...icon} />,
  //       name: "Laboratory",
  //       path: "/lab",
  //       element: <Laboratory />,
  //     },
  //   ],
  // },

];

export default routes;
