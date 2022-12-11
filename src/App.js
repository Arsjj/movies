import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import React from 'react';
import Mainpage from './pages/Register';
import Footer from './Components/Footer';
import Routes from './Routes';
import ScrollToTop from './helpers/ScrollToTop';
import AuthProvider from './Providers/AuthContext';


export const WatchContext = React.createContext()

function App() {
  const [context, setContext] = useState('')
  const [page, setPage] = useState(1)


  const getMovies = () => {
    setContext("movies")
  }

  const getSeries = () => {
    setContext('series')
  }

  const toPage = (num) => {
    setPage(num);
  };



  return (
    <Suspense >
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes />
          {/* <Mainpage /> */}
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </Suspense>
  );
}


export default App;
