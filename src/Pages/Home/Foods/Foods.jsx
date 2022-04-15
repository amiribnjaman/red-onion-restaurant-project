import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Foodes = () => {
    const navigate = useNavigate()
    const navigateFood = (value) => {
        navigate(`/${value}`)
    }
    const location = useLocation()
    
    return (
        <div className='mt-20'>
            <nav className='flex justify-center'>
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li>
                        <button 
                        onClick={() => navigateFood('lunch')}
                        style={location.pathname.includes('lunch') ? {color: 'red', borderBottom: '1px solid red', paddingBottom: '6px'} : {color: 'black'}}
                        className="block py-2 text-md pr-4 pl-3 font-semibold text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Lunch</button>
                    </li>
                    <li>
                        <button onClick={() => navigateFood('breakfast')} 
                        style={location.pathname.includes('breakfast') ? {color: 'red', borderBottom: '1px solid red', paddingBottom: '6px'} : {color: 'black'}}
                        className="block py-2 pr-4 pl-3 text-gray-700 font-semibold md:bg-transparent md:p-0 dark:text-white" aria-current="page">Breakfast</button>
                    </li>
                    <li>
                        <button onClick={() => navigateFood('dinner')} 
                        style={location.pathname.includes('dinner') ? {color: 'red', borderBottom: '1px solid red', paddingBottom: '6px'} : {color: 'black'}}
                        className="block py-2 pr-4 pl-3 text-gray-700 font-semibold border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400">Dinner</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Foodes;