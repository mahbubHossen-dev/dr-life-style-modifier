import Link from 'next/link';
import React from 'react';

import { CgProfile } from "react-icons/cg";
import Popup from './Popup';
import NotificationPopup from './NotificationPopup';
const DashNavbar = () => {
    return (
        <div className=' flex justify-end -mt-6'>
            <div className='flex place-items-center gap-4'>
                <Link href={'#'} className='py-2 px-4 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl text-white rounded'>Homa IR Test</Link>
                <Link href={'#'} className='hidden md:block py-2 px-4 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl text-white rounded'>Create New Appointment</Link>
                <NotificationPopup />
                <Popup />
                <CgProfile className='text-[28px]' />
            </div>
        </div>
    );
};

export default DashNavbar;