import { lazy } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import Mainpage from './pages/Register';


const Home = lazy(() => import('./pages/Home'));
const Media = lazy(() => import('./pages/Media'));
const Watch = lazy(() => import('./pages/Watch'));
const MyList = lazy(() => import('./pages/MyList'));
const Search = lazy(() => import('./pages/Search'));
const SignUp = lazy(() => import('./pages/SignUp'));
const InfoPage = lazy(() => import('./pages/InfoPage'));
const NotFound = lazy(() => import('./pages/NotFound'));
const GenrePage = lazy(() => import('./pages/Media/GenrePage'));
const PersonPage = lazy(() => import('./pages/PersonPage'));

const routes = [
  {
    path: '',
    element: <Mainpage />
  },
    {
      path: 'netflix',
      element: <Navigate to={"/"}/>
    },
  {
    path: 'home',
    element: <Home />
  },
  {
    path: 'movies/info/:id',
    element: <InfoPage />
  },
  {
    path: 'movies',
    element: <Media />
  },
  {
    path: 'movies/:pageId',
    element: <Media />
  },
  {
    path: 'movies/:genre/:id',
    element: <GenrePage />,
  },
  {
    path: 'movies/:genre/:id/:page',
    element: <GenrePage />
  },
  {
    path: 'series/',
    children: [
      {
        path: "",
        element: <Media />
      },
      {
        path: ":pageId",
        element: <Media />
      },
      {
        path: ":genre/:id/:page",
        element: < GenrePage />
      },
      {
        path: 'info/:id',
        element: <InfoPage />
      },
    ]
  },
  {
    path: 'search/:id',
    element: <Search />
  },
  {
    path: 'mylist',
    element: <MyList />
  },
  {
    path: 'watch/',
    children: [
      {
        path: "movie/:id",
        element: <Watch />
      },
      {
        path: "tv/:id/",
        element: <Watch />
      }
    ]
  },
  {
    path: 'person/:id',
    element: <PersonPage />
  },
  {
    path: 'sign-in/',
    element: <SignUp />
  }
  // {
  //   path: '*',
  //   element: <NotFound />
  // }
];

const Routes = () => {
  return useRoutes(routes);
};




export default Routes;
