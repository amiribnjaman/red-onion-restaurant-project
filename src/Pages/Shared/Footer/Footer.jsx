import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../Assets/img/logo.png'

const Footer = () => {
    const date = new Date()
    const currentYear = date.getFullYear()

    return (
        <div>
            <footer className="p-4 bg-black sm:p-6 dark:bg-gray-800">
                <div className='w-11/12 mx-auto py-6'>
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <Link to="/" className="flex items-center">
                                <img src={Logo} className="mr-3 h-8" alt="FlowBite Logo" />
                            </Link>
                        </div>
                        <div className="flex w-1/3 md:mr-10 justify-between grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div className='text-left'>
                                <ul className="text-slate-300 text-sm dark:text-white">
                                    <li className="">
                                        <Link to="/" className="hover:underline">About our online food</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="hover:underline">Read our blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="hover:underline">Sign up to deliver</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="hover:underline">Add your restaurant</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='text-left'>
                                <ul className="text-slate-300 text-sm dark:text-white">
                                    <li className="">
                                        <Link to="/" className="hover:underline">Get Help</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="hover:underline">Read FAQ's</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="hover:underline">View all cities</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="hover:underline">Restaurant near me</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="mb-8 mt-10 border-slate-500 sm:mx-auto dark:border-gray-700" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-slate-600 flex sm:text-center dark:text-white">&copy; {currentYear}<Link to="/" className="hover:underline"> 
                        <img  width={70} className="mx-3" src={Logo} alt="" />
                        </Link> All Rights Reserved.
                        </span>
                        <div className="flex mt-4  sm:justify-center sm:mt-0">
                            <ul className='flex space-x-6'>
                                <li><Link to='/' className='text-slate-500 text-sm'>Privacy policy</Link></li>
                                <li><Link to='/' className='text-slate-500 text-sm'>Terms of Use</Link></li>
                                <li><Link to='/' className='text-slate-500 text-sm'>Pricing</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;