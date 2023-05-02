import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const Main = () => {
    return (
        <div>

            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-100px)]">

                <Outlet></Outlet>
            </div>

            <Footer></Footer>


        </div>
    );
};

export default Main;