import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className=''>
            <div className="navbar bg-neutral text-neutral-content flex justify-between ">
                <a className="btn btn-ghost normal-case text-3xl">MASter Chef Recipe</a>

                <div className="">

                    <NavLink className='mr-3' to='/'>Home</NavLink>
                    <NavLink className='mr-3' to='/blog'>Blog</NavLink>
                    <button className='mr-3'>LogOut</button>
                    <NavLink className='mr-3' to='/login'>LogIn</NavLink>

                    {/* {user ? <img src='https://media.istockphoto.com/id/1170902285/photo/portrait-of-a-cool-guy-pointing-and-looking-up-impressed.jpg?s=612x612&w=0&k=20&c=Fs3iFBD-b6-21v3CgSdtFsqwiEVU-34WpTKxORJ7qVc=' alt="" className=' rounded-full w-10 h-10'></img> : <NavLink className='mr-3' to='/login'>LogIn</NavLink>} */}


                </div>
            </div>

        </div>

    );
};

export default Navbar;