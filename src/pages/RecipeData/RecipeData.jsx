import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LazyLoad from 'react-lazy-load';


const RecipeData = ({ food }) => {
    const { RecipeName, Ingredients, CookingMethod, Rating, RecipeImage } = food;

    const [favourite, setFavourite] = useState(false)

    const handleFav = () => {
        setFavourite(true)
        toast("Wow!! Added to favourite.")
    }


    return (
        <div>
            <LazyLoad>
                <div className='w-70 h-[1000px] shadow-2xl bg-slate-200  p-5 mt-3'>
                    <img className='w-full h-1/2 mb-2' src={RecipeImage} alt="" />
                    <h1 className='text-2xl font-bold '>{RecipeName}</h1>
                    <p className='mt-2 font-semibold'> <span className='text-2xl text-yellow-400'>Ingredients:</span>

                        {
                            Ingredients.map(int => <li>{int}</li>)
                        }
                    </p>
                    <div className='mt-3  '>

                        <small className='pr-4 text-xl flex-grow'>
                            <span className='text-xl text-yellow-400'>Method:</span>{CookingMethod} </small>
                        <small className='text-xl flex items-center'> <FaStar className='pr-2 text-3xl text-blue-500'></FaStar>{Rating}</small>
                    </div>


                    <div className='mt-2'>


                        <button onClick={() => handleFav()} disabled={favourite} className='p-2 bg-lime-500 rounded-md '>Add to Favourite</button>
                        <ToastContainer />
                    </div>
                </div>
            </LazyLoad>

        </div>
    );
};

export default RecipeData;