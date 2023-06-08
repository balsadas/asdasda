import React from 'react'
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const team = [
    { img: './img/play1.jpg', num: '3', title: 'Players_Name', title1: 'Players_Position' },
    { img: './img/play2.jpg', num: '6', title: 'Players_Name', title1: 'Players_Position' },
    { img: './img/play1.jpg', num: '3', title: 'Players_Name', title1: 'Players_Position' },
    { img: './img/play2.jpg', num: '3', title: 'Players_Name', title1: 'Players_Position' },
    { img: './img/play1.jpg', num: '7', title: 'Players_Name', title1: 'Players_Position' },
    { img: './img/play2.jpg', num: '8', title: 'Players_Name', title1: 'Players_Position' },
    { img: './img/play1.jpg', num: '9', title: 'Players_Name', title1: 'Players_Position' },
    { img: './img/play2.jpg', num: '3', title: 'Players_Name', title1: 'Players_Position' },

]


function Teams() {
    return (
        <div className='pt-[2rem] pb-[1rem] bg-[#f5f7f7e8]' id='OurTeam'>
            <div className='flex justify-end w-[95%] md:mt-[5rem] '>
                <div>
                    <h2
                        className='text-[6vw] md:text-[3vw] xl:text-[2vw]  font-[600] flex justify-end'>Our Teams</h2>
                    <div className='md:w-[75%] w-[70%] ml-8 md:ml-6 xl:ml-14 2xl:w-[70%]  h-[2px] bg-green-200'></div>
                </div>
            </div>

            <div>
                <div className='flex justify-center md:mb-[3rem] mb-[1.5rem]'>
                    <div className='flex justify-start w-[80%] md:mt-[5rem] mt-[2rem] '>
                        <h2 className='text-[6vw] md:text-[2vw] xl:text-[1.5vw] text-[#39546C] font-[700] flex justify-end'>Our Judge</h2>
                    </div>
                </div>
                <ul className='justify-center flex'>
                    <div className='md:w-[80%] w-[90%]'>
                        <Swiper
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                1000: {
                                    slidesPerView: 3,
                                },
                                1400: {
                                    slidesPerView: 3,
                                },
                            }}
                            autoplay={{
                                delay: 10000,
                                disableOnInteraction: false,
                            }}

                            navigation={true}
                            spaceBetween={30}
                            className="mySwiper"

                            modules={[Navigation, Autoplay]}
                        >
                            {team.map((Team, i) => (
                                <SwiperSlide key={i}>
                                    <div className='justify-center flex'>
                                        <li className='md:w-[25vw] w-[95%]'>
                                            <img src={Team.img} className='md:w-full md:h-[30vw] h-[100vw] object-cover' />
                                            <div className='md:mt-[1.5rem] mt-[1rem] flex items-center justify-between mb-4'>
                                                <div className='ml-2'>
                                                    <p className='md:text-[1.5vw] font-[700] text-[#39546C] text-[6vw]'>{Team.title}</p>
                                                    <p className='md:mt-[1rem] md:text-[1.2vw] text-[4vw] font-[600] mt-[.5rem] '>{Team.title1}</p>
                                                </div>
                                                <h2 className='text-[#39546C] font-bold md:text-[4vw] text-[15vw]'>{Team.num}</h2>
                                            </div>
                                        </li>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </ul>
            </div>


            <div>
                <div className='flex justify-center md:mb-[3rem] mb-[1.5rem]'>
                    <div className='flex justify-start w-[80%] md:mt-[5rem] mt-[2rem] '>
                        <h2 className='text-[6vw] md:text-[2vw] xl:text-[1.5vw] text-[#39546C] font-[700] flex justify-end'>Our Players</h2>
                    </div>
                </div>
            </div>
            <ul className='justify-center flex'>
                <div className='md:w-[80%] w-[90%]'>
                    <Swiper
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            1000: {
                                slidesPerView: 3,
                            },
                            1400: {
                                slidesPerView: 3,
                            },
                        }}
                        autoplay={{
                            delay: 10000,
                            disableOnInteraction: false,
                        }}

                        navigation={true}
                        spaceBetween={30}
                        className="mySwiper"

                        modules={[Navigation, Autoplay]}
                    >
                        {team.map((Team, i) => (
                            <SwiperSlide key={i}>
                                <div className='justify-center flex'>
                                    <li className='md:w-[25vw] w-[95%]'>
                                        <img src={Team.img} className='md:w-full md:h-[30vw] h-[100vw] object-cover' />
                                        <div className='md:mt-[1.5rem] mt-[1rem] flex items-center justify-between mb-4'>
                                            <div className='ml-2'>
                                                <p className='md:text-[1.5vw] font-[700] text-[#39546C] text-[6vw]'>{Team.title}</p>
                                                <p className='md:mt-[1rem] md:text-[1.2vw] text-[4vw] font-[600] mt-[.5rem] '>{Team.title1}</p>
                                            </div>
                                            <h2 className='text-[#39546C] font-bold md:text-[4vw] text-[15vw]'>{Team.num}</h2>
                                        </div>
                                    </li>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </ul>

        </div>
    )
}

export default Teams
