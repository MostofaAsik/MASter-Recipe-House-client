import React from 'react';
import { FaRegThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    const { ID, ChefPicture, ChefName, YearsOfExperience, NumberOfRecipes, Likes } = chef;
    return (
        <div className='w-70 h-70 shadow-lg p-6 mt-3'>
            <img className='w-full mb-2' src={ChefPicture} alt="" />
            <h1 className='text-2xl font-bold '>{ChefName}</h1>
            <h1 className='mt-2'>Years Of Experience:{YearsOfExperience}</h1>
            <div className='mt-3 flex '>

                <small className='pr-4 text-xl flex-grow'>Number of Recipe: {NumberOfRecipes}</small>
                <small className='text-xl flex items-center'> <FaRegThumbsUp className='pr-2 text-3xl text-blue-500'></FaRegThumbsUp>{Likes}</small>
            </div>


            <div className='mt-2'>

                <Link to={`/chefdata/${ID}`}>
                    <button className='p-2 bg-lime-500 rounded-md '>View Recipe</button>
                </Link>
            </div>


        </div>
    );
};

export default Chef;