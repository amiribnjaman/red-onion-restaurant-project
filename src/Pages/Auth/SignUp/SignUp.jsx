import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleLogo from '../../../Assets/img/icons/Glogo.png'
import useFirebase from '../../hooks/useFirebase';

const SignUp = () => {
    const { handleSigninWithGoogle, handleSingUp, errors } = useFirebase()
    const [userInfo, setUserInfo] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleSingupForm = e => {
        e.preventDefault()
        handleSingUp(userInfo.userName, userInfo.email, userInfo.password, userInfo.confirmPassword)
    }

    const handleNameBlur = e => {
        setUserInfo({ ...userInfo, userName: e.target.value })
    }
    const handleEmailBlur = e => {
        setUserInfo({ ...userInfo, email: e.target.value })
    }
    const handlePasswordBlur = e => {
        setUserInfo({ ...userInfo, password: e.target.value })
    }
    const handleConfirmBlur = e => {
        setUserInfo({ ...userInfo, confirmPassword: e.target.value })
    }



    return (
        <div className='w-1/4 mx-auto mt-2 mb-32  min-h-full'>
            {/* <img src={Banner} alt="" /> */}
            <div>
                {/* <img width={170} className='mx-auto' src={Logo} alt="" /> */}
                <h4 className='mt-2 font-semibold text-2xl'>Create an <span className='text-red-500'>Account.</span></h4>
                <form
                    onSubmit={handleSingupForm}
                    className='shadow-lg px-7 rounded-md py-6'>

                    <p className='text-red-600 text-[12px] mb-2 text-left'>{errors?.others}</p>
                    <div className="relative z-0 mb-5 w-full group">
                        <input
                            onBlur={handleNameBlur}
                            type="text" name="floating_name" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b appearance-none focus:border-red-400 focus:outline-none focus:ring-0  peer" placeholder=" " required="" />
                        <label htmlFor="floating_email" className="absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 left-1 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name*</label>
                    </div>

                    <div className="relative z-0 mb-5 w-full group">
                        <input
                            onBlur={handleEmailBlur}
                            type="email" name="floating_email" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b appearance-none focus:border-red-400 focus:outline-none focus:ring-0 peer" placeholder=" " required="" />
                        <label htmlFor="floating_email" className="absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 left-1 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email*</label>
                        <p className='text-red-600 text-[12px] mb-2 text-left'>{errors?.email}</p>
                    </div>
                    <div className="relative z-0 mb-5 w-full group">
                        <input
                            onBlur={handlePasswordBlur}
                            type="password" name="floating_password" id="floating_password" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-red-400 peer" placeholder=" " required="" />
                        <label htmlFor="floating_password" className="absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform left-1 -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password*</label>
                        <p className='text-red-600 text-[12px] mb-2 text-left'>{errors?.password}</p>
                    </div>
                    <div className="relative z-0 mb-5 w-full group">
                        <input
                            onBlur={handleConfirmBlur}
                            type="password" name="floating_confirm_password" id="floating_confirm_password" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-red-400 peer" placeholder=" " required="" />
                        <label htmlFor="floating_password" className="absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform left-1 -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password*</label>
                        <p className='text-red-600 text-[12px] mb-2 text-left'>{errors?.confirmPass}</p>
                    </div>
                    <div className='w-full'>
                        <button
                            type="submit" className="text-white mt-4 bg-red-600 block py-3 rounded-full w-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm text-center">Sign Up</button>
                    </div>

                    <Link to='/login' className='text-sm mt-2 block text-red-500 font-semibold'>Already have an account?</Link>
                    <div className='flex justify-center items-center my-3'>
                        <div className='w-1/3 bg-gray-500 h-[1px] mr-3 mt-1'></div>
                        <div>or</div>
                        <div className='w-1/3 bg-gray-500 h-[1px]  ml-3 mt-1'></div>
                    </div>
                    <button
                        onClick={handleSigninWithGoogle}
                        className='flex justify-evenly items-center mt-2 border border-red-100 rounded-full w-full'>
                        <img className='w-7 py-1' src={GoogleLogo} alt="" />
                        <span className='font-semibold'>Sing in with Google</span>
                    </button>
                </form>

            </div>

        </div>
    );
};

export default SignUp;