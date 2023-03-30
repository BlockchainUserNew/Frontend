import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Avatar,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { useMaterialTailwindController, setOpenSidenav } from "@/context";
const icon = {
  className: "w-5 h-5 text-inherit",
};
let userType = localStorage.getItem("userType")
// const Titles = ["PATIENT DASHBOARD", "DOCTOR DASHBOARD", "PATHOLOGY DASHBOARD"]
const PatientPages = [
  {
    icon: <ArrowRightOnRectangleIcon  {...icon} />,
    name: "Patient Details",
    path: "/details",
    layout: "patient"
  },
  {
    icon: <ArrowRightOnRectangleIcon  {...icon} />,
    name: "Patient History",
    path: "/history",
    layout: "patient"
  },
  // {
  //   icon: <ArrowRightOnRectangleIcon  {...icon} />,
  //   name: "View Patient Details",
  //   path: "/view/patient",
  //   layout: "patient"
  // },
]

const DoctorPages = [
  {
    icon: <ArrowRightOnRectangleIcon {...icon} />,
    name: "Doctor Details",
    path: "/details",
    layout: "doctor",
  },
  {
    icon: <ArrowRightOnRectangleIcon {...icon} />,
    name: "Patient Info",
    path: "/patient-info",
    layout: "doctor",
  }
]

const PathologyPages = [{
  icon: <ArrowRightOnRectangleIcon  {...icon} />,
  name: "pathology Details",
  path: "/details",
  layout: "laboratory"
},
{
  icon: <ArrowRightOnRectangleIcon {...icon} />,
  name: "Patient List",
  path: "/patient-list",
  layout: "laboratory"
},
]
// const RegistrationPages = [{
//   icon: <ArrowRightOnRectangleIcon  {...icon} />,
//   name: "Patient",
//   path: "/patient",
//   layout: "dashboard"
// },
// {
//   icon: <ArrowRightOnRectangleIcon {...icon} />,
//   name: "Doctor",
//   path: "/doctor",
//   layout: "dashboard"
// },
// {
//   icon: <ArrowRightOnRectangleIcon {...icon} />,
//   name: "Pathology",
//   path: "/lab",
//   layout: "dashboard"
// },
// ]
export function Sidenav({ brandImg, brandName, routes }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, sidenavType, openSidenav } = controller;
  const sidenavTypes = {
    dark: "bg-gradient-to-br from-blue-gray-800 to-blue-gray-900",
    white: "bg-white shadow-lg",
    transparent: "bg-transparent",

  };

  return (
    <aside
      style={{ overflow: "auto" }}
      className={`${sidenavTypes[sidenavType]} ${openSidenav ? "translate-x-0" : "-translate-x-80"
        } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0`}
    >
      <div
        className={`relative border-b ${sidenavType === "dark" ? "border-white/20" : "border-blue-gray-50"
          }`}
      >
        <Link to="/" className="flex items-center gap-4 py-6 px-8">
          <Avatar src={brandImg} size="sm" />
          <Typography
            variant="h6"
            color={sidenavType === "dark" ? "white" : "blue-gray"}
          >
            {brandName}
          </Typography>
        </Link>
        <IconButton
          variant="text"
          color="white"
          size="sm"
          ripple={false}
          className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          onClick={() => setOpenSidenav(dispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white" />
        </IconButton>
      </div>
      {
        window.location.pathname.slice(1, 8) === "patient" &&

        <div className="m-4">
          <ul key={"key"} className="mb-4 flex flex-col gap-1">

            <li className="mx-3.5 mt-4 mb-2">
              <Typography
                variant="small"
                color={sidenavType === "dark" ? "white" : "blue-gray"}
                className="font-black uppercase opacity-75"
              >
                PATIENT DASHBOARD
              </Typography>
            </li>
            {
              PatientPages.map((item, index) => {
                return (
                  <>
                    <li key={item.name}>
                      <NavLink to={`/${item.layout}${item.path}`}>
                        {({ isActive }) => (
                          <Button
                            variant={isActive ? "gradient" : "text"}
                            color={
                              isActive
                                ? sidenavColor
                                : sidenavType === "dark"
                                  ? "white"
                                  : "blue-gray"
                            }
                            className="flex items-center gap-4 px-4 capitalize"
                            fullWidth
                          >
                            <ArrowRightOnRectangleIcon  {...icon} />
                            <Typography
                              color="inherit"
                              className="font-medium capitalize"
                            >
                              {item.name}
                            </Typography>
                          </Button>
                        )}
                      </NavLink>
                    </li>
                  </>
                )
              })
            }

          </ul>
        </div>
      }
      {
        window.location.pathname.slice(1, 7) === "doctor" &&

        <div className="m-4">
          <ul key={"key"} className="mb-4 flex flex-col gap-1">

            <li className="mx-3.5 mt-4 mb-2">
              <Typography
                variant="small"
                color={sidenavType === "dark" ? "white" : "blue-gray"}
                className="font-black uppercase opacity-75"
              >
                DOCTOR DASHBOARD
              </Typography>
            </li>
            {
              DoctorPages.map((item, index) => {
                return (
                  <>
                    <li key={item.name}>
                      <NavLink to={`/${item.layout}${item.path}`}>
                        {({ isActive }) => (
                          <Button
                            variant={isActive ? "gradient" : "text"}
                            color={
                              isActive
                                ? sidenavColor
                                : sidenavType === "dark"
                                  ? "white"
                                  : "blue-gray"
                            }
                            className="flex items-center gap-4 px-4 capitalize"
                            fullWidth
                          >
                            <ArrowRightOnRectangleIcon  {...icon} />
                            <Typography
                              color="inherit"
                              className="font-medium capitalize"
                            >
                              {item.name}
                            </Typography>
                          </Button>
                        )}
                      </NavLink>
                    </li>
                  </>
                )
              })
            }

          </ul>
        </div>
      }
      {
        window.location.pathname.slice(1, 11) === "laboratory" &&

        <div className="m-4">
          <ul key={"key"} className="mb-4 flex flex-col gap-1">

            <li className="mx-3.5 mt-4 mb-2">
              <Typography
                variant="small"
                color={sidenavType === "dark" ? "white" : "blue-gray"}
                className="font-black uppercase opacity-75"
              >
                PATHOLOGY DASHBOARD
              </Typography>
            </li>
            {
              PathologyPages.map((item, index) => {
                return (
                  <>
                    <li key={item.name}>
                      <NavLink to={`/${item.layout}${item.path}`}>
                        {({ isActive }) => (
                          <Button
                            variant={isActive ? "gradient" : "text"}
                            color={
                              isActive
                                ? sidenavColor
                                : sidenavType === "dark"
                                  ? "white"
                                  : "blue-gray"
                            }
                            className="flex items-center gap-4 px-4 capitalize"
                            fullWidth
                          >
                            <ArrowRightOnRectangleIcon  {...icon} />
                            <Typography
                              color="inherit"
                              className="font-medium capitalize"
                            >
                              {item.name}
                            </Typography>
                          </Button>
                        )}
                      </NavLink>
                    </li>
                  </>
                )
              })
            }

          </ul>
        </div>
      }
      {/* {
        window.location.pathname.slice(1, 10) === "dashboard" &&

        <div className="m-4">
          <ul key={"key"} className="mb-4 flex flex-col gap-1">

            <li className="mx-3.5 mt-4 mb-2">
              <Typography
                variant="small"
                color={sidenavType === "dark" ? "white" : "blue-gray"}
                className="font-black uppercase opacity-75"
              >
                USER REGISTRATION
              </Typography>
            </li>
            {
              RegistrationPages.map((item, index) => {
                return (
                  <>
                    <li key={item.name}>
                      <NavLink to={`/${item.layout}${item.path}`}>
                        {({ isActive }) => (
                          <Button
                            variant={isActive ? "gradient" : "text"}
                            color={
                              isActive
                                ? sidenavColor
                                : sidenavType === "dark"
                                  ? "white"
                                  : "blue-gray"
                            }
                            className="flex items-center gap-4 px-4 capitalize"
                            fullWidth
                          >
                            <ArrowRightOnRectangleIcon  {...icon} />
                            <Typography
                              color="inherit"
                              className="font-medium capitalize"
                            >
                              {item.name}
                            </Typography>
                          </Button>
                        )}
                      </NavLink>
                    </li>
                  </>
                )
              })
            }

          </ul>
        </div>
      } */}
    </aside>
  );
}

Sidenav.defaultProps = {
  brandImg: "/img/favicon.png",
  brandName: "BigChainDb",
};

Sidenav.propTypes = {
  brandImg: PropTypes.string,
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;
