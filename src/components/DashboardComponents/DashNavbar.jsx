import Link from 'next/link';
import React from 'react';
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Popup from './Popup';
const DashNavbar = () => {
    return (
        <div className=' flex justify-end -mt-6'>
            <div className='flex place-items-center gap-4'>
                <Link href={'#'} className='py-2 px-4 bg-blue-600 text-white rounded'>Homa IR Test</Link>
                <Link href={'#'} className='hidden md:block py-2 px-4 bg-blue-600 text-white rounded'>Create New Appointment</Link>
                <IoIosNotifications className='text-[28px]' />
                <Popup />
                <CgProfile className='text-[28px]' />
            </div>
        </div>
    );
};

export default DashNavbar;