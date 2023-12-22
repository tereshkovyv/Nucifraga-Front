import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import PersonalAccount from "./pages/personalAccountPage/personalAccount";
import CreateTask  from './pages/createTaskPage/createTask';
import ListProjects from "./pages/listProjectsPage/listProjects";
import { Landing } from './pages/landingPage/landing';

const AppRoutes = [
  {
    index: true,
    element: <Landing />
  },
  {
    path: '/personalAccount',
    requireAuth: false,
    element: <PersonalAccount />
  },
  {
    path: '/createTask',
    requireAuth: false,
    element: <CreateTask />
  },
  {
    path: '/listProjects',
    requireAuth: false,
    element: <ListProjects />
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
