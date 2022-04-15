import React from 'react';
import BannerImg from '../../../Assets/img/bg.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-section'>
            <img className='' src={BannerImg} alt="" />
            <div className="banner-text">
                <h2 className='text-black font-semibold text-3xl'>Best food waiting for your belly.</h2>
                <div className='flex justify-between relative'>
                    <input type="text" id="email-adress-icon" class="block mt-3 p-2 py-3 pr-0 pl-10 w-full text-gray-900 bg-gray-50 rounded-full border-0 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search..." />
                    <button type="button" class="focus:outline-none absolute right-0 py-3 top-0 text-white bg-red-600 hover:bg-red-700 focus:ring-0 focus:ring-red-300 font-medium rounded-full mt-3 ml-2 text-sm px-8 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;