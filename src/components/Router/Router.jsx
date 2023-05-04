import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../../firebase/layout/Main';
import Blog from '../Blog/Blog';
import Home from '../Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import ErrorPage from '../Errorpage/ErrorPage';
import Recipe from '../../pages/Recipe/Recipe';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
            , {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'chefdata/:id',
                element: <PrivateRoute>
                    <Recipe></Recipe>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://asignment-10-server-side-mostofaasik.vercel.app/chefdata/${params.id}`)
            }
        ]
    }
])

export default router;