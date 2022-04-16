import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleFood from '../SingleFood/SingleFood';

const Food = () => {
    const params = useParams()
    const [foods, setFoods] = useState([])
    const { foodName } = params

    useEffect(() => {
        fetch(`./data/${foodName}.json`)
            .then(data => data.json())
            .then(res => setFoods(res))
    }, [foodName])

    return (
        <>
            <div className='container mt-8 mb-12 w-10/12 mx-auto block md:grid grid-cols-3 gap-4 '>
                {
                    foods.map(food => <SingleFood key={food.id} food={food} />)
                }
            </div>
            <button className='mb-8 hover:bg-gray-300 font-semibold bg-gray-200 text-black px-8 py-4 rounded-lg'>Checkout Your Food</button>
        </>
    );
};

export default Food;