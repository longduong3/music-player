// import { Headerr } from "../Components/Layout/Headerr";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";

const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/profile",
    component: Profile,
  },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
