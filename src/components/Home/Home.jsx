import React from 'react';
import Banner from '../../pages/Banner/Banner';
import ChefData from '../../pages/ChefData/ChefData';
import HomeSection1 from '../HomeSection/HomeSection1';
import HomeSection2 from '../HomeSection/HomeSection2';

const Home = () => {
    return (
        <div className=' '>

            <Banner></Banner>
            <ChefData></ChefData>
            <HomeSection1></HomeSection1>
            <HomeSection2></HomeSection2>
        </div>
    );
};

export default Home;