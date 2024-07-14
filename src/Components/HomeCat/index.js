import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const HomeCat = () => {


    return (

        <section>

            <div className="homeCat">
                <div className="container mt-2 cursor">
                    <h3 className='mb-3 hd'>Features Categories</h3>
                    <Swiper
                        slidesPerView={7}
                        spaceBetween={5}
                        navigation={true}
                        slidesPerGroup={1}
                        modules={[Navigation]}
                        className="mySwiper"
                    >


                        <SwiperSlide>
                            <div className="item text-center cursor">
                                <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-15.png" alt="headphone's" />
                                <h6>Head Phones</h6>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-15.png" alt="headphone's" />
                                <h6>Head Phones</h6>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-15.png" alt="headphone's" />
                                <h6>Head Phones</h6>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-15.png" alt="headphone's" />
                                <h6>Head Phones</h6>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-15.png" alt="headphone's" />
                                <h6>Head Phones</h6>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-15.png" alt="headphone's" />
                                <h6>Head Phones</h6>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-15.png" alt="headphone's" />
                                <h6>Head Phones</h6>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-15.png" alt="headphone's" />
                                <h6>Head Phones</h6>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-15.png" alt="headphone's" />
                                <h6>Head Phones</h6>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-15.png" alt="headphone's" />
                                <h6>Head Phones</h6>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-15.png" alt="headphone's" />
                                <h6>Head Phones</h6>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-15.png" alt="headphone's" />
                                <h6>Head Phones</h6>
                            </div>

                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </section>
    )
}

export default HomeCat;