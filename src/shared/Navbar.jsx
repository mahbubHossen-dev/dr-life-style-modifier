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
import { usePathname } from 'next/navigation'
import { useDarkMode } from './DarkMoodContext'

const Navbar = () => {
    const pathname = usePathname()
    const { isDarkMood, setIsDarkMood } = useDarkMode();
    console.log(isDarkMood)
    const [isScroll, setIsScroll] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const isDashboard = pathname.startsWith('/dashboard')

    const menuLinks = (
        <>
            <li>
                <Link onClick={() => setMenuOpen(false)} href={pathname === '/' ? "#top" : '/'} className="">
                    হোম
                </Link>
            </li>
            <li>
                <Link onClick={() => setMenuOpen(false)} href={pathname === '/' ? "#our_services" : '/'} className="">
                    সেবা
                </Link>
            </li>
            <li>
                <Link onClick={() => setMenuOpen(false)} href={pathname === '/' ? "#review" : '/'} className="">
                    রিভিউ
                </Link>
            </li>
            <li>
                <Link onClick={() => setMenuOpen(false)} href={pathname === '/' ? "#about_us" : '/'} className="">
                    আমাদের সম্পর্ক
                </Link>
            </li>
            <li>
                <Link onClick={() => setMenuOpen(false)} href={pathname === '/' ? "#contact_us" : '/'} className="">
                    যোগাযোগ
                </Link>
            </li>
            <li>
                <Link onClick={() => setMenuOpen(false)} href={pathname === '/' ? "#contact" : '/'} className="">
                    FAQ
                </Link>
            </li>
            <li>
                <Link onClick={() => setMenuOpen(false)} href="/appointment" className="bg-blue-700 text-white p-2 rounded">
                    বুক অ্যাপয়েন্টমেন্ট
                </Link>
            </li>
            <li>
                <Link onClick={() => setMenuOpen(false)} href="/bmi-calculator" className="bg-blue-700 text-white p-2 rounded">
                    BMI Calculator
                </Link>
            </li>
            <li>
                <Link onClick={() => setMenuOpen(false)} href="#contact" className="bg-blue-700 text-white p-2 rounded">
                    Download App
                </Link>
            </li>
            <li>
                <Link onClick={() => setMenuOpen(false)} href="/login" className="bg-blue-700 text-white p-2 rounded">
                    লগিন করুন
                </Link>
            </li>
            <li>
                <Link onClick={() => setMenuOpen(false)} href="#contact" className="p-2 rounded flex text-black dark:text-white">
                    <MdShoppingCart className='text-[27px] text-blue-700' /> <span className='text-xl'>Shop Now</span>
                </Link>
            </li>
        </>
    )

    return (
        <>
            {
                !isDashboard && <div>
                    <nav
                        className={` flex w-full fixed px-5 justify-between items-center py-4 z-50 transition-all duration-300 bg-white dark:bg-gray-900 border-b border-b-gray-200 ${isScroll
                            ? 'bg-white bg-opacity-50 backdrop-blur-lg dark:text-white'
                            : ''
                            }`}
                    >
                        <Link href="#top" className="w-56 h-auto">
                            <img src="/assets/logo.PNG" alt="" />
                        </Link>

                        <div className="flex justify-between items-center">
                            <ul
                                className={`hidden dark:mr-3 md:flex items-center md:gap-6 lg:gap-8 rounded-full py-3 px-12  shadow-sm bg-opacity-50 z-50 ${isScroll || 'bg-white dark:bg-gray-900 shadow-sm bg-opacity-50 dark:border dark:border-white/50'}`}
                            >
                                {menuLinks}
                            </ul>
                            <div className='flex'>
                                <div>
                                    <Image
                                        onClick={() => setIsDarkMood(!isDarkMood)}
                                        src={isDarkMood ? sunIcon : moonThemeIcon}
                                        alt="theme"
                                        className="w-6 cursor-pointer"
                                    />
                                </div>

                                <div onClick={() => setMenuOpen(true)} className="block md:hidden ml-3">
                                    <img
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
            }
        </>
    )
}

export default Navbar
