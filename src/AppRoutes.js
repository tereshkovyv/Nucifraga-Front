import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import AdminPanel from "./components/AdminPanel/AdminPanel";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    requireAuth: false,
    element: <FetchData />
  },
  {
    path: '/ap',
    requireAuth: false,
    element: <AdminPanel />
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
