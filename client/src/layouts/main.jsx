import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import axios from 'axios';

const Main = () => {
  useEffect(() => {
    const pingHealthcheck = () => {
      axios.get('/healthcheck')
        .then(response => console.log(`Healthcheck: ${response.data}`))
        .catch(error => console.error(`Healthcheck error: ${error}`));
    };

    const intervalId = setInterval(pingHealthcheck, 5 * 60 * 1000);

    pingHealthcheck();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Navbar />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Main;
