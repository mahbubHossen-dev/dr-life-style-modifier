import Link from 'next/link';
import React from 'react';
import { FaRegBookmark } from "react-icons/fa";
const AppointSection = () => {
    return (
        <div className='px-5  shadow-lg my-24'>
            <div className='lg:flex p-10 space-y-2 lg:space-y-0 justify-between '>
                <div className='space-y-2'>
                    <h1 className='text-4xl'>
                        চিকিৎসার জন্য আজ‌ই অ্যাপয়েন্টমেন্ট বুক করুন
                    </h1>
                    <p className=' my-2 mt-5 text-xl text-gray-700 dark:text-gray-400 '>•  ঔষধ মুক্ত জীবন সুস্থ জীবন, আর এর জন্য প্রয়োজন স্বাস্থ্যকর লাইফ স্টাইল।</p>
                </div>
                <div>
                    <button className='bg-blue-600 bg-opacity-100 text-white py-[10px] px-5 rounded'>
                        <Link href={'/appointment'} className='flex gap-2 place-items-center'><FaRegBookmark className='text-lg' /> Book Appointment</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AppointSection;