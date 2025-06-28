import React from 'react';

const SearchForm = () => {
    return (
        <div className='px-4 mx-auto max-w-screen-2xl sm:py-16 lg:px-6 transition-all duration-300'>
            <h1 className='text-3xl font-bold text-center'>অনুসন্ধান করুন</h1>
            <div className='grid md:grid-cols-2 gap-6 '>
                <div>
                    dsg
                </div>
                <div class="mt-10 md:m-auto shadow rounded p-2 w-full">

                    <div class="flex justify-center">
                        <h1 class="font-medium text-xl text-center text-gray-900 dark:text-gray-300">মেসেজ পাঠান</h1>
                    </div>
                    <div>

                        <div class="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <span class="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-gray-300">নামঃ
                                    <span class="text-red-500 font-semibold">*</span></span>
                                <div class="relative ">
                                    <input type="text" name="name" id="fname" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value="" required="" />
                                    <label for="fname" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/3 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">নাম
                                    </label>
                                </div>
                            </div>
                            <div>
                                <span class="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-gray-300">নাম্বারঃ
                                    <span class="text-red-500 font-semibold">*</span> </span>
                                <div class="relative ">
                                    <input type="number" name="number" id="number" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value="" required="" />
                                    <label for="number" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/3 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">আপনার
                                        নাম্বার</label>
                                </div>
                            </div>
                            <div>
                                <span class="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-gray-300">ইমেইলঃ
                                </span>
                                <div class="relative ">
                                    <input type="email" name="email" id="email" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label for="email" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/3 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">আপনার
                                        ইমেইল</label>
                                </div>
                            </div>
                        </div>

                        <div class="mb-5">
                            <span class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">মেসেজঃ <span class="text-red-500 font-semibold">*</span></span>
                            <div class="relative ">
                                <textarea type="text" name="message" id="message" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""></textarea>
                                <label for="message" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/3     peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">আপনার
                                    মেসেজ</label>
                            </div>
                        </div>
                        <button type="button" class="bg-blue-700 text-white border flex border-gray-300 focus:outline-none    font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-800 dark:text-white dark:border-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-600 dark:focus:ring-blue-700">
                            মেসেজ পাঠান</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SearchForm;