'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import bgImg from '../assets/header-bg-color.png'
import moonThemeIcon from '../assets/moon_icon.png'
import menuBlackIcon from '../assets/menu-black.png'
import closeBlackIcon from '../assets/close-black.png'
import sunIcon from '../assets/sun_icon.png'
import downloadIcon from '../assets/download-icon.png'
import { AiOutlineDownload } from 'react-icons/ai'
import menuIconWhite from '../assets/menu-white.png'
import closeWhiteIcon from '../assets/close-white.png'
import { MdShoppingCart } from "react-icons/md";

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const menuLinks = (
        <>
            <li>
                <a onClick={() => setMenuOpen(false)} href="#top" className="">
                    হোম
                </a>
            </li>
            <li>
                <a onClick={() => setMenuOpen(false)} href="#about" className="">
                    সেবা
                </a>
            </li>
            <li>
                <a onClick={() => setMenuOpen(false)} href="#skills" className="">
                    রিভিউ
                </a>
            </li>
            <li>
                <a onClick={() => setMenuOpen(false)} href="#projects" className="">
                    আমাদের সম্পর্ক
                </a>
            </li>
            <li>
                <a onClick={() => setMenuOpen(false)} href="#contact" className="">
                    যোগাযোগ
                </a>
            </li>
            <li>
                <a onClick={() => setMenuOpen(false)} href="#contact" className="">
                    FAQ
                </a>
            </li>
            <li>
                <a onClick={() => setMenuOpen(false)} href="#contact" className="bg-blue-700 text-white p-2 rounded">
                    বুক অ্যাপয়েন্টমেন্ট
                </a>
            </li>
            <li>
                <a onClick={() => setMenuOpen(false)} href="#contact" className="bg-blue-700 text-white p-2 rounded">
                    BMI Calculator
                </a>
            </li>
            <li>
                <a onClick={() => setMenuOpen(false)} href="#contact" className="bg-blue-700 text-white p-2 rounded">
                    Download App
                </a>
            </li>
            <li>
                <a onClick={() => setMenuOpen(false)} href="#contact" className="bg-blue-700 text-white p-2 rounded">
                    লগিন করুন
                </a>
            </li>
            <li>
                <a onClick={() => setMenuOpen(false)} href="#contact" className="p-2 rounded flex text-black">
                    <MdShoppingCart className='text-[27px] text-blue-700' /> <span className='text-xl'>Shop Now</span>
                </a>
            </li>
        </>
    )

    return (
        <div>


            <nav
                className={`flex w-full fixed px-5 justify-between items-center py-4 z-50 transition-all duration-300 bg-white border-b border-b-gray-200 ${isScroll
                    ? 'bg-white bg-opacity-50 backdrop-blur-lg'
                    : ''
                    }`}
            >
                <Link href="#top" className="w-56 h-auto">
                    <img src="/assets/logo.PNG" alt="" />
                </Link>

                <div className="flex justify-between items-center gap-4">
                    <ul
                        className={`hidden md:flex items-center md:gap-6 lg:gap-8 rounded-full py-3 px-12 bg-opacity-50 z-50 ${isScroll
                            ? 'bg-white'
                            : 'bg-white'
                            }`}
                    >
                        {menuLinks}
                    </ul>
                    <div className='flex'>
                        <div>
                            <Image
                                src={moonThemeIcon}
                                alt="theme"
                                className="w-6 cursor-pointer"
                            />
                        </div>



                        <div onClick={() => setMenuOpen(true)} className="block md:hidden ml-3">
                            <Image
                                src={menuBlackIcon}
                                alt="menu"
                                className="w-6 cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <ul
                className={`flex md:hidden flex-col fixed top-0 py-16 px-10 gap-4 h-screen bottom-0 w-64 z-50 transition-all duration-500 bg-red-100 ${menuOpen ? 'right-0' : '-right-64'
                    }`}
            >
                <div onClick={() => setMenuOpen(false)} className="absolute top-6 right-6">
                    <Image
                        src={closeBlackIcon}
                        alt="close"
                        className="w-5 cursor-pointer"
                    />
                </div>
                {menuLinks}
            </ul>
        </div>
    )
}

export default Navbar
