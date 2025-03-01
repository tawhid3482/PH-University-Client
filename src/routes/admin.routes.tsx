import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import CreateStudent from "../pages/Admin/CreateStudent";

const adminPaths2 = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "/admin/create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "/admin/create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "/admin/create-student",
        element: <CreateStudent />,
      },
    ],
  },
  
];





// export const adminPaths = [
//   {
//     path: "dashboard", // relative path
//     element: <AdminDashboard />,
//   },
//   {
//     path: "create-student", // relative path
//     element: <CreateStudent />,
//   },
//   {
//     path: "create-admin", // relative path
//     element: <CreateAdmin />,
//   },
//   {
//     path: "create-faculty", // relative path
//     element: <CreateFaculty />,
//   },
// ];
