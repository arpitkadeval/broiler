import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard.js"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
];

export default routes;
