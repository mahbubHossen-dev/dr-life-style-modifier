import React from 'react';

const Map = () => {
    return (
        <div className='my-24'>
            <div value="map">
                <div className="w-full">

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2419049097!2d90.39106047533559!3d23.738751578678283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c001d799a3%3A0x1fc742cf3feaf104!2sPG%20Hospital%2C%20Shahbagh%20Rd%2C%20Dhaka%201000!5e0!3m2!1sen!2sbd!4v1750842342392!5m2!1sen!2sbd"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className='w-full h-full min-h-[400px] rounded-md'></iframe>
                </div>
            </div>
        </div>
    );
};

export default Map;