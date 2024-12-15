// Display all the routes through here with header and footer. This is the main layout of the application

import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Main = () => {
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
