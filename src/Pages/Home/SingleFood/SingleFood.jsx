import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SingleFood = ({ food }) => {
    const { id, img, price } = food
    const location = useLocation()
    const path = location.pathname.substring(1)


    return (
        <Link to={`/food-details/${path}-${id}`}>
            <div className='cursor-pointer'>
                <div className="max-w-lg marker:bg-white rounded-lg border border-gray-200 hover:shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    <div className='w-48 mx-auto mt-3'>
                        <img className="rounded-t-lg" src={img} alt="" />
                    </div>
                    <div className="p-5">
                        <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology</h5>
                        <p className="mb-3 font-normal text-sm text-gray-500 dark:text-gray-400">Here are the biggest enterprise technology </p>
                        <h5 className='text-lg font-semibold'>${price}</h5>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default SingleFood;