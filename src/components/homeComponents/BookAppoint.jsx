import Link from 'next/link';
import React from 'react';

const BookAppoint = () => {
    const bgImage = {
        backgroundImage: `url('/public/bookBg.jpg')`

    }
    return (

        <section className="bg-white dark:bg-gray-900 mt-8 md:mt-28 xl:mt-24 transition-all duration-300">
            <div className="py-8 px-4 mx-auto max-w-screen sm:py-16 lg:px-6  transition-all duration-300">
                <div className="w-full h-96 relative bg-gray-300 rounded overflow-hidden">
                    {/* <!-- Placeholder Image --> */}
                    <img src="https://i.ibb.co/9m87Nygt/bookBg.jpg" alt="Placeholder Image" className="w-full h-full object-cover" />

                        {/* <!-- Text Overlay --> */}
                        <div className="absolute inset-0 flex items-center justify-center text-white text-center bg-black hover:bg-opacity-50 hover:bg-opacity-70 transition duration-300">
                            <div className="flex flex-col justify-center items-center">
                                <p className="font-semibold text-4xl">চিকিৎসার জন্য নাম লেখাতে আজ&zwnj;ই অ্যাপয়েন্টমেন্ট বুক করুন</p>
                                <Link href="/appointment" className="mt-5 group relative inline-block  hover:scale-110 w-fit h-fit transition-transform duration-200 ease-in-out">
                                    <div className="flex justify-center items-center space-x-2 bg-blue-600 hover:bg-red-500 py-3 px-5 rounded">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-5 h-5 text-white" fill="currentColor"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"></path></svg>
                                        </div>
                                        <span className="text-white">
                                            Book Appointment
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                </div>
            </div>
        </section>

    );
};

export default BookAppoint;