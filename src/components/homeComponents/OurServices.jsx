import { servicesData } from '@/data/data';
import Image from 'next/image';
import React from 'react';

const OurServices = () => {
    console.log(servicesData)
    return (
        <div className='grid md:grid-cols-3 py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6  transition-all duration-300 gap-5 my-5'>
            {
                servicesData.map((service, idx) => (
                    <div key={idx} className=' text-gray-700 shadow-md hover:scale-105 transition-all duration-200 cursor-pointer space-y-4'>
                        <div className='flex flex-col items-center'>
                            <img src={service?.image} alt={service.title} />
                            <h3 className='font-semibold text-xl mt-2 my-1'>{service.title}</h3>
                        </div>
                        
                        
                            <p className='px-5'>{service.description.slice(1, 25)}.......</p>
                            <button className='px-5 pb-10 text-blue-600 font-semibold'>View Details</button>
                        
                    </div>
                ))
            }
        </div>
    );
};

export default OurServices;