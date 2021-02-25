import Dashboard from "./views/Dashboard.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "fas fa-chart-pie",
    component: Dashboard,
    layout: "/admin",
  }
];
export default routes;
