'use client'
import React from 'react'

const AppointmentForm = () => {
    return (
        <div className='pt-24'>
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 transition-all duration-300 ">
                <h1 className="text-4xl text-center text-gray-800 mb-6 dark:text-gray-400">বুক অ্যাপয়েন্টমেন্ট</h1>

                <form
                    action="https://mdabdulkaiyum.in/create/create-an-offline-appointment"
                    method="POST"
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    <div>
                        <label htmlFor="reason" className="block mb-2 text-xl font-medium text-gray-900">
                            আপনার সমস্যা সিলেক্ট করুন
                        </label>
                        <select
                            id="reason"
                            name="reason"
                            required
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded p-2.5 w-full"
                        >
                            <option value="ফ্যাটি প্যানক্রিয়াস">ফ্যাটি প্যানক্রিয়াস</option>
                            <option value="হাইপারইনসুলিনমিয়া">হাইপারইনসুলিনমিয়া</option>
                            <option value="কোলেস্ট্রল (রক্তে চর্বি)">কোলেস্ট্রল (রক্তে চর্বি)</option>
                            <option value="লিভারে চর্বি জমা (ফ্যাটি লিভার)">লিভারে চর্বি জমা (ফ্যাটি লিভার)</option>
                            <option value="ট্রাইগ্লিসারাইড (টিজি)">ট্রাইগ্লিসারাইড (টিজি)</option>
                            <option value="হার্ট ব্লকেজ">হার্ট ব্লকেজ</option>
                            <option value="ফ্যাটি কিডনি">ফ্যাটি কিডনি</option>
                            <option value="কিডনিতে পাথর (কিডনি স্টোন)">কিডনিতে পাথর (কিডনি স্টোন)</option>
                            <option value="অতিরিক্ত ওজন (স্থুলতা)">অতিরিক্ত ওজন (স্থুলতা)</option>
                            <option value="হাই প্রেসার (উচ্চ রক্তচাপ)">হাই প্রেসার (উচ্চ রক্তচাপ)</option>
                            <option value="ডায়াবেটিস (সুগার)">ডায়াবেটিস (সুগার)</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="specialitist" className="block mb-2 text-xl font-medium text-gray-900">
                            লাইফস্টাইল মডিফায়ার
                        </label>
                        <select
                            id="specialitist"
                            name="specialitist"
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded p-2.5 w-full"
                        >
                            <option value="main">Md. Abdul Kaiyum</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="date" className="block mb-2 font-medium text-gray-900">
                            অ্যাপয়েন্টমেন্ট ডেট সিলেক্ট করুন
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="datepicker_appointment_date"
                                name="date"
                                required
                                placeholder="Select date"
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded pl-10 p-2.5 w-full"
                            />
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                📅
                            </div>
                        </div>
                    </div>

                    <div className="hidden" id="select_time">
                        <span className="block mb-2 font-medium text-gray-900">সময় নির্ধারণ করুন</span>
                        <ul className="grid w-full gap-4 md:grid-cols-2" id="appointmentListForPatientAppointmentRequest"></ul>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="mt-7 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl font-medium rounded px-5 py-2.5"
                        >
                            Request Appointment Now!
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AppointmentForm
