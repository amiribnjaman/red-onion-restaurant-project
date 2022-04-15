import React from 'react';
import AboutCard from '../AboutCard/AboutCard';

import AboutImg1 from '../../../Assets/img/about/about1.png'
import AboutImg2 from '../../../Assets/img/about/about3.png'
import AboutImg3 from '../../../Assets/img/about/about2.png'

import FastDeliveryImg from '../../../Assets/img/icons/fastdeliver.png'
import HomeDeliveryImg from '../../../Assets/img/icons/homedelivery.png'
import BellIcon from '../../../Assets/img/icons/bell.png';


const About = () => {
    return (
        <div className='my-24 container w-11/12 mx-auto'>
            <div className="header">
                <h1 className='text-2xl font-semibold'>Why You Choose Us</h1>
                <p className='mt-1 text-sm text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
                <p className='text-sm text-gray-500'>Lorem, ipsum dolor sit amet consectetur</p>
            </div>
            <div className='grid md:grid-cols-3 gap-4'>
                <AboutCard AboutImg={AboutImg1} title="Fast Delivery" IconImg={FastDeliveryImg} />
                <AboutCard AboutImg={AboutImg2} title="A Good Auto Responder" IconImg={BellIcon} />
                <AboutCard AboutImg={AboutImg3} title="Home Delivery" IconImg={HomeDeliveryImg} />
            </div>
        </div>
    );
};

export default About;