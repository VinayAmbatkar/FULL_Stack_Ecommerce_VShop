import React from 'react'
import HomeBanner from '../../Components/HomeBanner';
import slideBanner2 from '../../assets/images/Banners/bottomBanner.gif';
import { Button } from '@mui/material';
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Rating from '@mui/material/Rating';



const Home = () => {

    var ProductSliderOptions = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    return (
        <>
            <HomeBanner />

            <div className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="banner">
                                <img src={slideBanner2} className='cursor w-100' />

                            </div>
                        </div>
                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info">
                                    <h3 className='mb-0 hd'>BEST SELLERS</h3>
                                    <p className='text-light text-sml mb-0'>Do not Miss the current offers until the End of Month</p>

                                </div>

                                <Button className='viewAllBtn ml-auto'>View All<FaArrowRightLong /></Button>

                            </div>


                            <div className="product_row w-100 mt-4">
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={0}

                                    modules={[Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide><div className=" item productItem">
                                        <div className="imageWrapper">
                                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" className='w-100' />
                                        </div>
                                        <div className="info">
                                            
                                            <h4>All Natural Italian-Style Chicken Meatballs</h4>
                                            <span className='text-susses d-block'>In Stock</span>
                                            <Rating className='mt-2 mb-2 ' name="read-only" value={5} readOnly size='small' precision={0.5} />
                                            
                                            <div className="d-flex">
                                                <span className='oldPrice'>230 Rs</span>
                                                <span className='netPrice text-danger ml-3'>230 Rs</span>
                                            </div>
                                            </div>

                                    </div></SwiperSlide>
                                    <SwiperSlide><div className=" item productItem">
                                        <div className="imageWrapper">
                                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-56-346x310.jpg" className='w-100' />
                                        </div>
                                        <div className="info">
                                            
                                            <h4>Fresh Brown Coconut</h4>
                                            <span className='text-susses d-block'>In Stock</span>
                                            <Rating className='mt-2 mb-2 ' name="read-only" value={5} readOnly size='small' precision={0.5} />
                                            
                                            <div className="d-flex">
                                                <span className='oldPrice'>40 Rs</span>
                                                <span className='netPrice text-danger ml-3'>30Rs</span>
                                            </div>
                                            </div>

                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide><div className=" item productItem">
                                        <div className="imageWrapper">
                                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-58-346x310.jpg" className='w-100' />
                                        </div>
                                        <div className="info">
                                            
                                            <h4>Blueberries – 1 Pint Package</h4>
                                            <span className='text-susses d-block'>In Stock</span>
                                            <Rating className='mt-2 mb-2 ' name="read-only" value={5} readOnly size='small' precision={0.5} />
                                            
                                            <div className="d-flex">
                                                <span className='oldPrice'>200 Rs</span>
                                                <span className='netPrice text-danger ml-3'>180 Rs</span>
                                            </div>
                                            </div>

                                    </div></SwiperSlide>
                                    <SwiperSlide><div className=" item productItem">
                                        <div className="imageWrapper">
                                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" className='w-100' />
                                        </div>
                                        <div className="info">
                                            
                                            <h4>All Natural Italian-Style Chicken Meatballs</h4>
                                            <span className='text-susses d-block'>In Stock</span>
                                            <Rating className='mt-2 mb-2 ' name="read-only" value={5} readOnly size='small' precision={0.5} />
                                            
                                            <div className="d-flex">
                                                <span className='oldPrice'>230 Rs</span>
                                                <span className='netPrice text-danger ml-3'>230 Rs</span>
                                            </div>
                                            </div>

                                    </div></SwiperSlide>
                                    
                                    <SwiperSlide><div className=" item productItem">
                                        <div className="imageWrapper">
                                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" className='w-100' />
                                        </div>
                                        <div className="info">
                                            
                                            <h4>All Natural Italian-Style Chicken Meatballs</h4>
                                            <span className='text-susses d-block'>In Stock</span>
                                            <Rating className='mt-2 mb-2 ' name="read-only" value={5} readOnly size='small' precision={0.5} />
                                            
                                            <div className="d-flex">
                                                <span className='oldPrice'>230 Rs</span>
                                                <span className='netPrice text-danger ml-3'>230 Rs</span>
                                            </div>
                                            </div>

                                    </div></SwiperSlide>
                                    <SwiperSlide><div className=" item productItem">
                                        <div className="imageWrapper">
                                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" className='w-100' />
                                        </div>
                                        <div className="info">
                                            
                                            <h4>All Natural Italian-Style Chicken Meatballs</h4>
                                            <span className='text-susses d-block'>In Stock</span>
                                            <Rating className='mt-2 mb-2 ' name="read-only" value={5} readOnly size='small' precision={0.5} />
                                            
                                            <div className="d-flex">
                                                <span className='oldPrice'>230 Rs</span>
                                                <span className='netPrice text-danger ml-3'>230 Rs</span>
                                            </div>
                                            </div>

                                    </div></SwiperSlide>

                                    
                                </Swiper>



                            </div>



                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default Home;