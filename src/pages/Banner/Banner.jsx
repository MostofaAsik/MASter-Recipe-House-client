import React from 'react';
import './Banner.css'
import { FaArrowDown } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const Banner = () => {
    return (
        <div className="bg-cover  bg-center h-screen" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2015/10/26/07/21/vegetables-1006694_1280.jpg')" }}>
            <div className="flex flex-col justify-center items-center h-full">
                <div>

                    <Marquee className='text-4xl text-white font bold' speed={100} pauseOnHover={true} gradient={true} gradientColor={[217, 72, 24]} gradientWidth={400}>
                        Welcome to Our MASter Recipe House Website!  <br /> Here You Can Enjoy My Recipes!!!
                    </Marquee>

                </div>
                <div className='mt-5'>
                    <p className="text-green-300 text-3xl font-bold">Our Most Popular Recipe</p>
                    <br />
                    <p className='text-center text-xl bg-rose-900 text-white py-4 hover:translate-y-9 hover:transform-gpu flex items-center justify-center'><FaArrowDown className='pr-3 text-4xl'></FaArrowDown> Expolore Here</p>
                </div>

            </div>

        </div>

    );
};

export default Banner;