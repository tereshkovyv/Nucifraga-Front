import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
// import { Home } from "./components/Home";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import PersonalAccount from "./pages/personalAccountPage/personalAccount";
import CreateTask from "./pages/createTaskPage/createTask";
import InfoAboutUs from "./pages/infoAboutUsPage/InfoAboutUs";
import MainScreen from "./pages/mainPage/MainScreen";
import InfoAdvantage from "./pages/advantagePage/infoAdvantage";
import InfoPossibilities from "./pages/possibilitiesPage/infoPossibilities";
import NewsAboutUs from "./pages/newsAboutUsPage/newsAboutUs";
import Footer from "./pages/footerPage/footer";
import Footnote from "./pages/footnotePage/footnote";
// import {Route} from "react-router-dom";
import React, {Fragment} from "react";


const AppRoutes = [
  {
    index: true,
    element: <Fragment>
                <MainScreen/>
                <InfoAboutUs/>
                <InfoAdvantage/>
                <InfoPossibilities/>
                <NewsAboutUs/>
                <Footer/>
                <Footnote/> 
            </Fragment>
  },
  {
    path: '/ap',
    requireAuth: false,
    element: <AdminPanel />
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
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
