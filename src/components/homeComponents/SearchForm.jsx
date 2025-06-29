import React from 'react';

const SearchForm = () => {
    return (
        <div className='px-4 mx-auto max-w-screen-2xl sm:py-16 lg:px-6 transition-all duration-300'>
            <h1 className='text-3xl font-bold text-center'>অনুসন্ধান করুন</h1>
            <div className='grid md:grid-cols-2 gap-6 place-items-center'>
                <div className='mt-12'>
                    <img src="https://i.ibb.co/v4J2P9rr/search-Image-removebg-preview.png" alt="" />
                </div>
                <div className="mt-10 md:m-auto shadow rounded p-2 w-full">

                    <div className="flex justify-center">
                        <h1 className="font-medium text-xl text-center text-gray-900 dark:text-gray-300">মেসেজ পাঠান</h1>
                    </div>
                    <div>

                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <span className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-gray-300">নামঃ
                                    <span className="text-red-500 font-semibold">*</span></span>
                                <div className="relative ">
                                    <input type="text" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required="" />
                                    <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/3 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">নাম
                                    </label>
                                </div>
                            </div>
                            <div>
                                <span className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-gray-300">নাম্বারঃ
                                    <span className="text-red-500 font-semibold">*</span> </span>
                                <div className="relative ">
                                    <input type="number" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                                    <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/3 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">আপনার
                                        নাম্বার</label>
                                </div>
                            </div>
                            <div>
                                <span className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-gray-300">ইমেইলঃ
                                </span>
                                <div className="relative ">
                                    <input type="email" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/3 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">আপনার
                                        ইমেইল</label>
                                </div>
                            </div>
                        </div>

                        <div className="mb-5">
                            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">মেসেজঃ <span className="text-red-500 font-semibold">*</span></span>
                            <div className="relative ">
                                <textarea type="text" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""></textarea>
                                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/3     peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">আপনার
                                    মেসেজ</label>
                            </div>
                        </div>
                        <button type="button" className="bg-blue-700 text-white border flex border-gray-300 focus:outline-none    font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-800 dark:text-white dark:border-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-600 dark:focus:ring-blue-700">
                            মেসেজ পাঠান</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SearchForm;