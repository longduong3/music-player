// import { Headerr } from "../Components/Layout/Headerr";

import Media from "../Components/Layout/Media";
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
  {
    path: "/media",
    component: Media,
  },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
