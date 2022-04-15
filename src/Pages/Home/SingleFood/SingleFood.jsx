import React from 'react';

const SingleFood = ({ food }) => {
    const { name, img, desc, price } = food
    
    return (
        <div className=''>
            <div className="max-w-lg marker:bg-white rounded-lg border border-gray-200 hover:shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <div className='w-48 mx-auto mt-3'>
                    <img className="rounded-t-lg" src={img} alt="" />
                </div>
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <h5 className='text-lg font-semibold'>Price: ${price}</h5>

                </div>
            </div>

        </div>
    );
};

export default SingleFood;