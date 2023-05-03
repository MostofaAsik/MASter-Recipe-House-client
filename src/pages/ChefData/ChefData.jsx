import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';

const ChefData = () => {
    const [chefData, setChefData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefdata')
            .then(res => res.json())
            .then(data => setChefData(data))
    }, [])
    return (
        <div>
            <h2 className='text-4xl text-orange-600 mt-2 mb-3 text-center font-bold'> They Are My Lovely Chef</h2>
            <div className='grid grid-cols-1  md:grid-cols-3 gap-6'>
                {
                    chefData.map(chef => <Chef
                        key={chef.ID}
                        chef={chef}
                    ></Chef>)
                }
            </div>
        </div>
    );
};

export default ChefData;