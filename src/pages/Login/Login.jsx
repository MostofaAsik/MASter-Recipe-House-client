import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const { logIn, loading, googleLogin, githubLogin } = useContext(AuthContext);
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleLogIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setSuccess('')
        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess("Successfully Login")
                setError('')
                form.reset();
            })
            .catch(error => {
                console.log(error.message);
                setError(' Email or Password dose not match')
            })
    }

    //googleLOgin
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    //github Login
    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className='text-center bg-lime-300 py-10'>
            <h2 className='text-2xl font-semibold mb-20 mt-10'> Login Here</h2>
            <p className='mb-2 text-red-600'> {error}</p>
            <p className='mb-2 text-red-600'> {success}</p>
            <form onSubmit={handleLogIn}>

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

                <button onClick={handleGoogleLogin} className='bg-amber-800 text-white px-6 py-1 rounded-md text-2xl'>  <span className='flex items-center'><FaGoogle className='mr-4'> </FaGoogle> Google</span> </button>
                <br />
                <br />
                <button onClick={handleGithubLogin} className='bg-amber-800 text-white px-6 py-1 rounded-md text-2xl'> <span className='flex items-center'><FaGithub className='mr-4'> </FaGithub> Github</span> </button>
            </div>
        </div>
    );
};

export default Login;