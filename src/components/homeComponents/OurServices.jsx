import { servicesData } from '@/data/data';
import Image from 'next/image';
import React from 'react';
import ServiceDialog from './ServiceDialog';

const OurServices = () => {
    console.log(servicesData)
    return (
        <div id='our_services' className='grid md:grid-cols-3 py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6  transition-all duration-300 gap-5 my-5 scroll-mt-32'>
            {
                servicesData.map((service, idx) => (
                    <div key={idx} className=' text-gray-700 dark:text-gray-400 shadow-md hover:scale-105 transition-all duration-200 cursor-pointer space-y-4'>
                        <div className='flex flex-col items-center'>
                            <img src={service?.image} alt={service.title} />
                            <h3 className='font-semibold text-xl mt-2 my-1'>{service.title}</h3>
                        </div>
                        
                        
                            <p className='px-5'>{service.description.slice(1, 25)}.......</p>
                            
                            <ServiceDialog service={service}/>
                        
                    </div>
                ))
            }
        </div>
    );
};

export default OurServices;