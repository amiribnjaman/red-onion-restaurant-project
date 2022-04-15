import React from 'react';
import Logo from '../../../Assets/img/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav class="bg-white w-11/12 mx-auto border-gray-200 px-2 sm:px-4 py-6 rounded dark:bg-gray-800">
                <div class="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/" class="flex items-center">
                        <img src={Logo} class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
                    </Link>
                    <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>

                    <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
                        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium items-center">
                            <li>
                                <Link to="/" class="block py-2 text-base pr-4 pl-3 text-white text-black rounded md:bg-transparent md:text-black md:p-0 dark:text-white" aria-current="page">
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </Link>
                            </li>
                            <li>
                                <Link to="/" class="block py-2 pr-4 pl-3 text-white text-black rounded md:bg-transparent md:text-black md:p-0 dark:text-white" aria-current="page">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link to="/" class="block py-2 pr-4 pl-3 text-base text-white text-black rounded md:bg-transparent md:text-black md:p-0 dark:text-white" aria-current="page">
                                    <button type="button" class="focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-0 font-medium rounded-full text-sm px-8 py-2 mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Sign Up</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default NavBar;