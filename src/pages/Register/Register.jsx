import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);

        if (password.length < 6) {
            setError('Password minimum  6 charecters')
        }
        setSuccess('')

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                setSuccess("You are succesfull created an account")
                setError('')
                form.reset()
            })
            .catch(error => {
                console.log(error.message);

            })
    }

    return (
        <div className='text-center'>
            <h2 className='text-2xl font-semibold mb-20 mt-10'> Register Here</h2>
            <p className='mb-2 text-red-600'> {error}</p>
            <p className='mb-2 text-red-600'> {success}</p>
            <form onSubmit={handleRegister}>
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