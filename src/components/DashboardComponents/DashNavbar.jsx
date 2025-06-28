import Link from 'next/link';
import React from 'react';
import { IoIosNotifications } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
const DashNavbar = () => {
    return (
        <div className='flex justify-end -mt-6'>
            <div className='flex place-items-center gap-4'>
                <Link href={''} className='py-2 px-4 bg-blue-600 text-white rounded'>Homa IR Test</Link>
                <Link href={''} className='py-2 px-4 bg-blue-600 text-white rounded'>Create New Appointment</Link>
                <IoIosNotifications className='text-2xl' />
                <PiDotsNineBold className='text-2xl' />
                <CgProfile className='text-2xl' />
            </div>
        </div>
    );
};

export default DashNavbar;