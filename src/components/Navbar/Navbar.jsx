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

                    {user ? <img src='https://ibb.co/2ZYgH4t' alt="" className=' rounded-full w-10 h-10'></img> : <NavLink className='mr-3' to='/login'>LogIn</NavLink>}


                </div>
            </div>

        </div>

    );
};

export default Navbar;