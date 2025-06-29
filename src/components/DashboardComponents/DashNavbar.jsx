import Link from 'next/link';
import React from 'react';

import Popup from './Popup';
import NotificationPopup from './NotificationPopup';
import ProfilePopup from './ProfilePopup';
import { DashNavDialog } from './DashNavDialog';
const DashNavbar = () => {
    return (
        <div className=' flex justify-end -mt-6'>
            <div className='flex place-items-center gap-4'>
                <DashNavDialog />
                
                <Link href={'/appointment'} className='hidden md:block py-2 px-4 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl text-white rounded'>Create New Appointment</Link>
                <NotificationPopup />
                <Popup />
                <ProfilePopup />
                
            </div>
        </div>
    );
};

export default DashNavbar;