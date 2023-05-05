import React, { useState } from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import './Navbar.css'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);


    console.log(user?.photoURL);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error.message))
    }
    return (
        <div className=' '>
            <div className="navbar bg-neutral text-neutral-content pl-3 pr-3  md:pl-16 md:pr-16  flex flex-col md:flex-row items-center md:items-center justify-between md:justify-between ">
                <a className="btn btn-ghost normal-case text-3xl">MASter Recipe House</a>

                <div className="">

                    <NavLink className={({ isActive }) =>
                        isActive ? "active" : ""
                    } to='/'>Home</NavLink>
                    <NavLink className='ml-3 mr-3' to='/blog'>Blog</NavLink>
                    <button onClick={handleLogout} className='mr-3 '>LogOut</button>


                    {user ? <img title={user?.displayName} src={user?.photoURL} alt="" className=' rounded-full w-10 h-10  '></img> : <NavLink className='mr-3' to='/login'>LogIn</NavLink>}
                    <NavLink className='ml-3 mr-3' to='/register'>Register</NavLink>

                </div>
            </div>

        </div>

    );
};

export default Navbar;