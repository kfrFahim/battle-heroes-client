import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
     return (
          <div className='bg-gray-100'>
               <Navbar></Navbar>
               <Outlet></Outlet>
          </div>
     );
};

export default Main;