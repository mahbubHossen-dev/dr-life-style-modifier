'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


const Testimonial = () => {
    return (
        <div id='review' className='w-full px-[8%] scroll-mt-32'>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div className='text-center space-y-6 py-10'>
                        <h2 className='text-center text-4xl font-semibold'>
                            সুখী হওয়ার গল্প
                        </h2>
                        <p className='text-gray-600 font-semibold italic text-2xl'>আমি এখানে আমার অতিরিক্ত ওজনের জন্য চিকিৎসা করতে এসেছিলাম। চিকিৎসা শুরু করার আগে আমার ওজন ছিল ৭৮ কেজি।। চিকিৎসা শুরুর ১ মাস ২৩ দিন পরে আমার ওজন হয় ৬৬ কেজি। আমি এখন আগের থেকে আনেক ভালো ফিল করছি।</p>
                        <div>
                            <img
                                className="w-fit mx-auto rounded-full shadow-lg"
                                src="https://i.ibb.co/PZ9wmTCQ/testimonial1.png.png"
                                alt=""
                            />

                            <p className='font-semibold'>গুড়িয়া খাতুন</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center space-y-6 py-10'>
                        <h2 className='text-center text-4xl font-semibold'>
                            সুখী হওয়ার গল্প
                        </h2>
                        <p className='text-gray-600 font-semibold italic text-2xl'>আমি এখানে আমার অতিরিক্ত ওজনের জন্য চিকিৎসা করতে এসেছিলাম। চিকিৎসা শুরু করার আগে আমার ওজন ছিল ৭৮ কেজি।। চিকিৎসা শুরুর ১ মাস ২৩ দিন পরে আমার ওজন হয় ৬৬ কেজি। আমি এখন আগের থেকে আনেক ভালো ফিল করছি।</p>
                        <div className='mx-auto text-center flex flex-col justify-center items-center'>
                            
                            <img
                                className="w-fit mx-auto rounded-full shadow-lg"
                                src="https://i.ibb.co/cSfH3VGV/testimonial2.png"
                                alt=""
                            />

                            <p className='font-semibold'>গুড়িয়া খাতুন</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonial;

