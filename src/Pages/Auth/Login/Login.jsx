import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../Assets/img/logo2.png'

const Login = () => {
    return (
        <div className='w-1/4 mx-auto mt-6 mb-32  min-h-full'>
            {/* <img src={Banner} alt="" /> */}
            <div>
                {/* <img width={170} className='mx-auto' src={Logo} alt="" /> */}
                <h4 className='mt-14 font-semibold text-xl'>Welcome Back <span className='text-red-500'>Login</span></h4>
                <form className='shadow-lg px-7 rounded-md py-8 mt-6'>
                    <div class="relative z-0 mb-6 w-full group">
                        <input type="email" name="floating_email" class="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b appearance-none focus:border-red-400 focus:outline-none focus:ring-0 peer" placeholder=" " required="" />
                        <label for="floating_email" class="absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 left-1 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email</label>
                    </div>
                    <div class="relative z-0 mb-6 w-full group">
                        <input type="password" name="floating_password" id="floating_password" class="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-red-400 peer" placeholder=" " required="" />
                        <label for="floating_password" class="absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform left-1 -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>

                    <div className='w-full'>
                        <button type="submit" class="text-white mt-8 bg-red-600 block py-3 rounded-full w-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm text-center">Login</button>
                    </div>
                    <Link to='/signup' className='text-sm my-3 block text-red-500 font-semibold'>Haven't Account? Create One.</Link>
                </form>

            </div>

        </div>
    );
};

export default Login;