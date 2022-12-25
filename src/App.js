import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

import Routes from './Routes';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollToTop from './helpers/ScrollToTop';
import AuthProvider from './Providers/AuthContext';

import './App.scss';

function App() {

  return (
    <Suspense >
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes />
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </Suspense>
  );
}


export default App;
