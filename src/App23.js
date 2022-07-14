import React, { useRef, useState } from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

// Import Swiper styles
import 'swiper/swiper-bundle.esm.browser';
// import 'swiper/css';
import 'swiper/modules/navigation/navigation';
import 'swiper/modules/pagination/pagination.js';
import 'swiper/modules/scrollbar/scrollbar';
import './testimonials.css'

// import required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import array of testimonials for displaying the data.
import { testimonials } from './testimoialsOne'

export default function App() {
    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() =>
                    console.log("slide change")
                }
                breakpoints={{
                    576: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    756: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1222: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                loop={true}
                className="mySwiper"
            >
                {
                    testimonials.map((slideContent, index) => {
                        return (
                        <SwiperSlide key={index} virtualIndex={index}>
                            <div className="testimonial-container">
                                <img
                                    className="img-fluid testimonial-img user"
                                        src={slideContent.img}
                                    alt="customer pic"
                                />
                                <p className="testimonial-content">
                                    {" "}
                                   {slideContent.content}
                                </p>
                                    <h3 className="testimonial-heading">{slideContent.name }</h3>
                                </div></SwiperSlide>
                        )
                    })}

                </Swiper>
        </>
    );
}
