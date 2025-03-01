import { ReactNode } from "react";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import CreateStudent from "../pages/Admin/CreateStudent";
import { NavLink } from "react-router";

type TRoute = {
  path: string;
  element: ReactNode;
};

type TSidebarItem = {
  key:string,
  label:ReactNode,
  children?:TSidebarItem[]
}

const adminPaths = [
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
// programmatically generate paths for sidebar mainLayout
export const adminSidebarItems = adminPaths.reduce((acc: TSidebarItem[], item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      label: <NavLink to={item.path}>{item.name}</NavLink>,
    });
  }

  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: <NavLink to={child.path}>{child.name}</NavLink>,
      })),
    });
  }
  return acc;
}, [] as TSidebarItem[]);



// programmatically generate paths for routes
export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }
  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }
  return acc;
}, []);

// hard coded paths
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
