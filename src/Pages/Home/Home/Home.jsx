import React from 'react';
import { Outlet } from 'react-router-dom';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Foods from '../Foods/Foods';

const Home = () => {
    return (
        <div>
            <Banner />
            <Foods />
            <Outlet />
            <About />
        </div>
    );
};

export default Home;