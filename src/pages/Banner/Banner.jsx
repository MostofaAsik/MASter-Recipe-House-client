import React from 'react';
import './Banner.css'
import { FaArrowDown } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="bg-cover  bg-center h-screen" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2015/10/26/07/21/vegetables-1006694_1280.jpg')" }}>
            <div className="flex flex-col justify-center items-center h-full">
                <div>
                    <p className="text-white text-3xl font-bold">Welcome to Our Website!</p>
                </div>
                <div className='mt-5'>
                    <p className="text-green-300 text-3xl font-bold">Our Most Popular Recipe</p>
                    <br />
                    <p className='text-center text-xl bg-rose-900 text-white py-4 hover:translate-x-9 hover:transform-gpu flex items-center justify-center'><FaArrowDown className='pr-3 text-4xl'></FaArrowDown> Expolore Here</p>
                </div>

            </div>

        </div>
        // <div className='flex flex-col-reverse md:flex-row mx-20 '>

        //     <div className=''>
        //         <h1 className='text-5xl font-bold'>Our Most  <br /> Popular <br /><span className='font-color'> Recipe</span></h1>
        //         <p className='mt-6 text-gray-600'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
        //         {/* <button className='bg-blue-500 p-1 md:p-2 rounded-md mt-4'>Get Started</button> */}
        //     </div>
        //     <div className='w-25'>
        //         <img className='w-25 h-25 rounded-sm' src='https://c.ndtvimg.com/2022-03/jcliv9dg_shahi-paneer_625x300_15_March_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886' alt="" />
        //     </div>
        // </div>
    );
};

export default Banner;