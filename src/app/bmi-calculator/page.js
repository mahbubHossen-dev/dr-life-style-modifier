'use client';

import React from 'react';

const BMICalculator = () => {
    return (
        <div className='pt-24'>
            <div className="py-8 px-4 mx-auto sm:py-16 lg:px-6">
                <div className="max-w-screen-sm mx-auto">
                    <div className="w-full bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 space-y-6">
                        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">BMI Calculator</h1>

                        {/* Input Section */}
                        <div className="space-y-4 dark:text-white">
                            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                                <input
                                    type="number"
                                    placeholder="Height (cm)"
                                    className="w-full border border-gray-300 p-3 rounded-md   outline-none"
                                />
                                <input
                                    type="number"
                                    placeholder="Weight (kg)"
                                    className="w-full border border-gray-300 p-3 rounded-md   outline-none"
                                />
                            </div>

                            <div className="space-y-2 dark:text-white">
                                <label className="block text-gray-700 dark:text-white">Select Gender:</label>
                                <select className="w-full border border-gray-300 p-3 rounded-md   outline-none">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-gray-700 dark:text-white">Age (years):</label>
                                <input
                                    type="number"
                                    placeholder="Age"
                                    className="w-full border border-gray-300 p-3 rounded-md   outline-none"
                                />
                            </div>

                            <button
                                className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition"
                            >
                                Calculate BMI
                            </button>
                        </div>

                        {/* Result Section (static placeholder) */}
                        <div className="text-center space-y-2">
                            <p className="text-xl font-bold text-gray-700">Your BMI:</p>
                            <span className="text-4xl text-gray-800 font-semibold">--</span>
                            <p className="text-xl text-gray-500">-- Category --</p>
                        </div>

                        {/* BMI Categories List */}
                        <ul className="space-y-2">
                            {[
                                { label: 'Very Severely Underweight', range: '< 15', color: 'bg-blue-300' },
                                { label: 'Severely Underweight', range: '15 - 16', color: 'bg-blue-400' },
                                { label: 'Underweight', range: '16 - 18.5', color: 'bg-blue-500' },
                                { label: 'Normal', range: '18.5 - 24.9', color: 'bg-green-400' },
                                { label: 'Overweight', range: '25 - 29.9', color: 'bg-yellow-400' },
                                { label: 'Obese Class 1', range: '30 - 34.9', color: 'bg-orange-400' },
                                { label: 'Obese Class 2', range: '35 - 39.9', color: 'bg-red-400' },
                                { label: 'Obese Class 3', range: '>= 40', color: 'bg-pink-500' },
                            ].map((item) => (
                                <li
                                    key={item.label}
                                    className="flex items-center p-3 rounded-md hover:bg-gray-100 cursor-pointer"
                                >
                                    <span className={`h-5 w-5 rounded-full mr-3 ${item.color}`}></span>
                                    {item.label} (BMI {item.range})
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BMICalculator;
