import React from 'react';
import { Link } from 'react-router-dom';
// import Banner from '../../../Assets/img/banner.png'
import Logo from '../../../Assets/img/logo2.png'

const SignUp = () => {
    return (
        <div className='w-1/4 mx-auto mt-2 mb-32  min-h-full'>
            {/* <img src={Banner} alt="" /> */}
            <div>
                {/* <img width={170} className='mx-auto' src={Logo} alt="" /> */}
                <h4 className='mt-6 mb-1 font-semibold text-2xl'>Create an <span className='text-red-500'>Account.</span></h4>
                <form className='shadow-lg px-7 rounded-md py-6'>
                    <div class="relative z-0 mb-6 w-full group">
                        <input type="text" name="floating_name" class="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b appearance-none focus:border-red-400 focus:outline-none focus:ring-0  peer" placeholder=" " required="" />
                        <label for="floating_email" class="absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 left-1 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    </div>
                    <div class="relative z-0 mb-6 w-full group">
                        <input type="email" name="floating_email" class="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b appearance-none focus:border-red-400 focus:outline-none focus:ring-0 peer" placeholder=" " required="" />
                        <label for="floating_email" class="absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 left-1 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email</label>
                    </div>
                    <div class="relative z-0 mb-6 w-full group">
                        <input type="password" name="floating_password" id="floating_password" class="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-red-400 peer" placeholder=" " required="" />
                        <label for="floating_password" class="absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform left-1 -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <div class="relative z-0 mb-6 w-full group">
                        <input type="password" name="floating_password" id="floating_password" class="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-red-400 peer" placeholder=" " required="" />
                        <label for="floating_password" class="absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform left-1 -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
                    </div>

                    <div className='w-full'>
                        <button type="submit" class="text-white mt-4 bg-red-600 block py-3 rounded-full w-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm text-center">Sign Up</button>
                    </div>
                    <Link to='/login' className='text-sm my-2 block text-red-500 font-semibold'>Already have an account?</Link>
                </form>

            </div>

        </div>
    );
};

export default SignUp;