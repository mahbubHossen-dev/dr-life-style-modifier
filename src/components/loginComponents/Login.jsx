import Link from 'next/link';
import React from 'react';

const Login = () => {
    return (
        <div className='pt-24'>
            <div className="py-8 px-4 mx-auto max-w-screen-sm sm:py-16 lg:px-6 transition-all duration-300">
                <div className="flex justify-center items-center">
                    <h1 className="text-3xl mb-5 mt-3 text-center font-semibold"> লগিন করুন </h1>
                    <div className="hidden -mt-2 ml-2 md:flex text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className="w-10 h-10"><path d="M222-255q63-40 124.5-60.5T480-336q72 0 134 20.5T739-255q44-54 62.5-109T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 61 19 116t63 109Zm257.814-195Q422-450 382.5-489.686q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314-489.5q-39.686 39.5-97.5 39.5Zm-.219 370q-83.146 0-156.275-31.5t-127.225-86Q142-252 111-324.841 80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.5q-54 54.5-127.129 86T479.595-80Z"></path></svg>
                    </div>
                </div>

                <div className="shadow p-5 rounded">
                    <div className="text-red-500 font-semibold">
                    </div>
                    <form>

                        <div className="relative ">
                            <input type="text" id="" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" name="email_or_phone" placeholder="" />
                            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/3     peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">ফোন নম্বর বা ইমেইল দিন </label>
                        </div>

                        <span className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-gray-300">পাসওয়ার্ডঃ</span>
                        <div className="relative ">
                            <input type="password" id="password" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" name="password" placeholder=" " />
                            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/3     peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">পাসওয়ার্ড দিন </label>

                            <div className="cursor-pointer text-white absolute right-2.5 bottom-3" id="hideAndShowPass">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-5 h-5 text-gray-500" fill="currentColor"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Z"></path></svg>
                            </div>

                        </div>


                        <div className="flex justify-between items-center mt-5">
                            <Link href='/dashboard'>
                                <button type="submit" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2 transition-all duration-300 cursor-pointer">
                                    লগিন করুন
                                </button>
                            </Link>

                            <span className="text-gray-800">পাসওয়ার্ড <a href="/password/reset" className="text-blue-500 hover:underline"> ভুলে গিয়েছেন?</a></span>

                        </div>
                    </form>

                    <div>
                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-64 h-1 my-8 bg-gray-100 border-0 rounded dark:bg-gray-700" />
                            <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 text-gray-500 font-semibold dark:bg-gray-900">
                                অথবা
                            </div>
                        </div>
                        <span className="text-gray-800">
                            কোনো একাউন্ট না থাকলে <a href="https://mdabdulkaiyum.in/register" className="text-blue-500 hover:underline">এখন থেকে </a>
                            নতুন এ্যাকাউন্ট তৈরি করতে পারেন।
                        </span>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Login;