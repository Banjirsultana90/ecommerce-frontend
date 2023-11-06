import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/shared/Navbar';
import Footer from '../Components/shared/Footer';
import Home from '../Components/Home/Home';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;