import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 py-6 mx-auto w-full max-w-screen-2xl p-4 ">
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Section */}
                    <div>
                        <div className="flex items-center mb-2">
                            <img src="/assets/logo.PNG" alt="Logo" className="" />

                        </div>
                        <p className="md:text-lg w-1/2">
                            পীস লাইব্রেরী মূলত এটি একটি সংস্থা, ঔষধকে খাদ্য হিসেবে নয়, বরং খাদ্যকেই ঔষধ হিসেবে গ্রহণ করুন। এই স্লোগান নিয়ে আমাদের স্বাস্থ্যকর লাইফ স্টাইল এগিয়ে নিয়ে যাওয়ার চেষ্টা করছি।
                        </p>
                    </div>

                    <div className='md:flex justify-between'>
                        <div>
                            <h4 className="font-semibold mb-2">ঠিকানা</h4>
                            <p className="">
                                PeaceLibrary DIABETES<br />
                                CENTRE VII-Sadkpur (Chandpur)<br />
                                Bridge, Jhankhand Border<br />
                                Po-Bhasapakar<br />
                                Ps-Samserganj<br />
                                Dist-Murshidabad<br />
                                Pin-742202<br />
                                State: West Bengal
                            </p>
                        </div>

                        <div className=''>
                            <h4 className="font-semibold mb-2">খোলা থাকে</h4>
                            <p className="">
                                সোম – বৃহস্পতি<br />
                                (6 AM – 6 PM) <br />
                                শনি – রবি <br />
                                (6 AM – 6 PM) <br />
                                <span className='text-red-500 font-bold'>শুক্রবার বন্ধ থাকে</span>
                            </p>
                                <img className='pt-1' src="https://i.ibb.co/m5mfJr8k/foogle.png" alt="" />
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">যোগাযোগ</h4>
                            <ul>
                                <li>ঘণ্টা: ৬ AM - ৬ PM</li>
                                <li className='flex gap-1'><FaPhoneAlt className='text-md' /> মোবাইল: +91 9732 624 907</li>
                                <li className='flex gap-1'><FaWhatsapp  className='text-md' /> WhatsApp: +91 9732 624 907</li>
                                <li>ইমেইল: info@peacelibrary.com</li>
                            </ul>
                            <div className="mt-4">
                                <a href="/faq" className="text-blue-500 hover:underline">FAQ</a> |
                                <a href="/career" className="text-blue-500 hover:underline ml-2">Career</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-6 text-gray-500 text-xs">
                    <p>© 2025 MD ABDUL KAIYUM - Peacelibrary. All Rights Reserved.</p>
                    <FaFacebookF className='text-xl' />
                </div>
            </div>
        </footer>
    );
};

export default Footer;