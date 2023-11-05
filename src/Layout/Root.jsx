import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/shared/Navbar';
import Footer from '../Components/shared/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;