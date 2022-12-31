import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';

import Routes from './Routes';
import AuthProvider from './Providers/AuthContext';
import ScrollToTop from './helpers/ScrollToTop';
import useMediaType from './hooks/useMediaType';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import './App.scss';

function App() {
  const watch = useMediaType('watch');
  const register = useLocation().pathname === '/'

  return (
    <Suspense >
      <AuthProvider>
        <ScrollToTop />
        {watch || <Navbar />}
        <Routes />
        {watch || register || <Footer />}
      </AuthProvider>
    </Suspense>
  );
}


export default App;
