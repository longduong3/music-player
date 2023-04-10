// import { Headerr } from "../Components/Layout/Headerr";

import Albums from "../Components/Albums";
import Media from "../Components/Layout/Media";
import Library from "../Pages/Library";
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
  {
    path: "/albums",
    component: Albums,
  },
  {
    path: "/library",
    component: Library,
  },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
