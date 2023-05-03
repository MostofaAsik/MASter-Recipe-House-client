import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import RecipeData from '../RecipeData/RecipeData';

const Recipe = () => {

    const recipe = useLoaderData()

    const { ID, ChefPicture, ChefName, Description, Recipes } = recipe
    console.log(Recipes);
    return (
        <div className="bg-gradient-to-r from-blue-500 to-green-500 h-92 ">
            <div className="flex flex-col justify-center items-center h-full shadow-xl text-center p-10">

                <img src={ChefPicture} alt="" className='w-30 h-36' />
                <h1 className='text-4xl text-red-700 font-bold mt-3 mb-4'> {ChefName}</h1>
                <p className="text-black text-xl font-bold  text-center w-2/3"><span className='text-indigo-700'>Biography:</span> {Description}</p>
                <Link to='/'>
                    <button className='bg-orange-300 p-2 b mt-2  '>Back to Home</button>
                </Link>

            </div>
            <div className='grid grid-rows-1  md:grid-rows-3 gap-6 mt-10 p-10 bg-gradient-to-r from-red-500 to-lime-500'>
                {
                    Recipes.map(food => <RecipeData
                        key={food.i}
                        food={food}
                    ></RecipeData>)
                }
            </div>
            <div className='text-center mt-2  mb-3'>

            </div>
        </div>
    );
};

export default Recipe;