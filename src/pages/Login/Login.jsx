import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight, FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <div className='text-center'>
            <h2 className='text-2xl font-semibold mb-20 mt-10'> Login Here</h2>
            <form >

                <label className='mr-5 font-bold' htmlFor="Email">Email:</label>
                <input className='p-3 border-2' type="email" name='email' placeholder="Enter Your Email" required />
                <br />
                <br />
                <label className='mr-5 font-bold' htmlFor="Password">Password</label>
                <input className='p-3 border-2' type="password" name="password" placeholder='Enter Your Password' required />
                <br />
                <br />
                <input className='bg-red-800 text-white px-6 py-1 rounded-md text-2xl' type="submit" value="LogIn" />
            </form>

            <p className='mt-5'>Don't have Acoount? <Link to='/register'>
                <span className='text-blue-600'>
                    Register Here
                </span>
            </Link></p>
            <div className='mt-4'>

                <button className='bg-amber-800 text-white px-6 py-1 rounded-md text-2xl'>  <span className='flex items-center'><FaGoogle className='mr-4'> </FaGoogle> Google</span> </button>
                <br />
                <br />
                <button className='bg-amber-800 text-white px-6 py-1 rounded-md text-2xl'> <span className='flex items-center'><FaGithub className='mr-4'> </FaGithub> Github</span> </button>
            </div>
        </div>
    );
};

export default Login;