import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import Testimonial from './Testimonial';
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Testimonials = () => {
    const [testimonialData, setTestimonialData] = useState([]);

    useEffect(() => {
        axios.get('https://travel-solo-server-moa6.vercel.app/testimonials')
            .then(res => setTestimonialData(res.data))
    }, [])

    return (
        <section className="max-w-screen-xl mx-auto px-6 pb-24 mt-16">
            {/* heading  */}
            <Fade left>

                <div className="flex justify-center items-center flex-col">
                    <h1 className="font-logo text-gray-800 text-3xl font-semibold">Testimonials</h1>
                    <div className="h-1 w-24 bg-red-400 rounded-full"></div>
                </div>
            </Fade>
            {/* testimonials  */}
            <Swiper
                loop={true}
                className="mySwiper py-6"
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                pagination={true} grabCursor={true}
                slidesPerView={1}
                speed={600}
                spaceBetween={20}
            >
                {testimonialData.map(item => (
                    <SwiperSlide key={item.id}>
                        <Bounce left>
                            <Testimonial  {...item} />
                        </Bounce>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Testimonials
