'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'

import Image from 'next/image'

const Banner = () => {
    return (
        <div className='pt-32'>
            <div className='w-full '>
                <img className='w-full' src={'/slideUpperImage.jpg'} height={100} width={100} alt='image' />
            </div>
            <div className="w-full">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper rounded-md md:h-[70vh] object-cover"
                >
                    <SwiperSlide>
                        <div className="relative w-full h-32 md:h-[38rem] rounded-md">
                            <Image
                                src='/slide1.jpg'
                                alt="Slide 1"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full h-32 md:h-[38rem] rounded-md">
                            <Image
                                src='/slide2.jpg'
                                alt="Slide 2"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full h-32 md:h-[38rem] rounded-md">
                            <Image
                                src='/slide3.jpg'
                                alt="Slide 3"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Banner
