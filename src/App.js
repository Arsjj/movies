import Routes from './Routes';
import { Suspense } from 'react';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollToTop from './helpers/ScrollToTop';
import AuthProvider from './Providers/AuthContext';
import useMediaType from './hooks/useMediaType';

import './App.scss';

function App() {
  const watch = useMediaType('watch');

  return (
    <Suspense >
      <AuthProvider>
        <ScrollToTop />
        {watch || <Navbar />}
        <Routes />
        {watch || <Footer />}
      </AuthProvider>
    </Suspense>
  );
}


export default App;
