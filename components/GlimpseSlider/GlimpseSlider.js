'use client'
import React, { useEffect, useState } from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './GlimpseSlider.module.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper styles
import 'swiper/css';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const GlimpseSlider = ({data}) => {
    const [glimpseData, setGlimpseData] = useState([])
    const [swiperRef, setSwiperRef] = useState(null);

    const prevHandler = () => {
        swiperRef.slidePrev();
    };

    const nextHandler = () => {
        swiperRef.slideNext();
    };

    useEffect(() => {
      setGlimpseData(data)
    }, [])
    
    return (
        <div>
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 1.3,
                    },
                    550: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1440: {
                        slidesPerView: 5,
                    }
                }}
                modules={[Pagination]}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => setSwiperRef(swiper)}
                style={{
                    "--swiper-pagination-color": "#777",
                    "--swiper-pagination-bullet-inactive-color": "#222",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "14px",
                    "--swiper-pagination-bullet-horizontal-gap": "6px"
                }}
                className={styles.productSlider}
            >
                <div className={styles.productSliderWrapper}>
                    {
                        glimpseData?.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className={styles.productSliderCard}>
                                    <div className={styles.pscImg}>
                                        <img src={`/img/gallery/${item.img}`} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </div>
                <div className={styles.sliderExtras}>
                    <div className={styles.sliderNavButton}>
                        <button onClick={prevHandler}><FiArrowLeft /></button>
                        <button onClick={nextHandler}><FiArrowRight /></button>
                    </div>
                </div>
            </Swiper>
        </div>
    )
}

export default GlimpseSlider