import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 py-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600">
            {/* Left Section */}
            <div>
                <div className="flex items-center mb-2">
                    <img src="/path-to-logo.png" alt="Logo" className="h-10 w-auto mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">MD ABDUL KAIYUM</h3>
                </div>
                <p className="text-gray-500">
                    Lifestyle modifier<br />
                    Green ganjipur upt & att jkati psta,<br />
                    Bheramara, Kushtia, Bangladesh<br />
                    মোবাইল নম্বর: ০১৭১১-১২৩৪৫৬
                </p>
            </div>

            {/* Center Section */}
            <div>
                <h4 className="font-semibold text-gray-900 mb-2">ঠিকানা</h4>
                <p className="text-gray-500">
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

            {/* Right Section */}
            <div>
                <h4 className="font-semibold text-gray-900 mb-2">যোগাযোগ</h4>
                <p className="text-gray-500">
                    ঘণ্টা: ৬ AM - ৬ PM<br />
                    মোবাইল: +91 9732 624 907<br />
                    WhatsApp: +91 9732 624 907<br />
                    ইমেইল: info@peacelibrary.com<br />
                    <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://www.google.com/chrome/static/images/favicons/google/favicon-32x32.png" alt="Google Play" className="h-8 w-auto mt-2" />
                    </a>
                </p>
                <div className="mt-4">
                    <a href="/faq" className="text-blue-500 hover:underline">FAQ</a> |
                    <a href="/career" className="text-blue-500 hover:underline ml-2">Career</a>
                </div>
            </div>
        </div>
        <div className="mt-6 text-center text-gray-500 text-xs">
            © 2025 MD ABDUL KAIYUM - PeaceLibrary. All Rights Reserved.
        </div>
    </div>
</footer>
    );
};

export default Footer;