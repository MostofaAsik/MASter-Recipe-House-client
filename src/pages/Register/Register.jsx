import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='text-center'>
            <h2 className='text-2xl font-semibold mb-20 mt-10'> Register Here</h2>
            <form>
                <label className='mr-5 font-bold' htmlFor="Name">Name:</label>
                <input className='p-3 border-2' type="text" name='name' placeholder="Enter Your Name" required />
                <br />
                <br />
                <label className='mr-5 font-bold' htmlFor="phot">Photo:</label>
                <input className='p-3 border-2' type="text" name='photo' placeholder="Enter Your Photo Url" required />
                <br />
                <br />
                <label className='mr-5 font-bold' htmlFor="Email">Email:</label>
                <input className='p-3 border-2' type="email" name='email' placeholder="Enter Your Email" required />
                <br />
                <br />
                <label className='mr-5 font-bold' htmlFor="Password">Password</label>
                <input className='p-3 border-2' type="password" name="password" placeholder='Enter Your Password' required />
                <br />
                <br />
                <input className='bg-red-800 text-white px-6 py-1 rounded-md text-2xl' type="submit" value="SignUp" />
                <p className='mt-5'>Already have Acoount? <Link to='/login'>
                    <span className='text-blue-600'>
                        Login Here
                    </span>
                </Link></p>
            </form>

        </div>
    );
};

export default Register;