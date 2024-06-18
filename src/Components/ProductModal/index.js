import React, { useContext, useRef, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { IoMdClose } from "react-icons/io";
import { Rating } from '@mui/material';
import Slider from 'react-slick';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import QuanntityBox from '../QuantityBox';
import { IoIosHeartEmpty } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import { MyContext } from '../../App';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


const ProductModal = (props) => {
    const zoomSlider = useRef();
    const zoomSliderBig = useRef();
    const context = useContext(MyContext)
    var settings2 = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false
    }
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        arrows: false
    }
    const [slideIndex, setslideIndex] = useState(0)
    const goto = (index) => {
        setslideIndex(index)
        zoomSlider.current.swiper.slideTo(index)
        zoomSliderBig.current.swiper.slideTo(index)
    }
    return (
        <>
            <Dialog open={true} className='productModal' onClose={() => context.setisOpenProductModel(false)}>
                <Button className='close_' onClick={() => context.setisOpenProductModel(false)}><IoMdClose /></Button>
                <h4 className='mb-1 font-weight-bold'>Angie’s Boomchickapop Sweet & Salty Kettle Corn</h4>
                <div className='d-flex align-items-center'>
                    <div className='d-flex align-items-center mr-4'>
                        <span>Nhãn hiệu:</span>
                        <span className='ml-2'><b>Học</b></span>
                    </div>
                    <Rating name='read-only' value={5} readOnly size='small' precision={0.5} />
                </div>
                <hr></hr>
                <div className='row mt-2 productDetailModal'>
                    <div className='col-md-5'>
                        <div className='productZoom position-relative'>
                            <div className='badge badge-primary'>10%</div>
                            <Swiper
                                slidesPerGroup={1}
                                spaceBetween={0}
                                navigation={false}
                                slidesPerView={1}
                                modules={[Navigation]}
                                className='zoomSliderBig'
                                ref={zoomSliderBig}
                            >
                                <SwiperSlide>
                                    <div className='item'>
                                        <InnerImageZoom
                                            zoomType='hover' zoomScale={1}
                                            src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60.jpg'
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='item'>
                                        <InnerImageZoom
                                            zoomType='hover' zoomScale={1}
                                            src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-46.jpg'
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='item'>
                                        <InnerImageZoom
                                            zoomType='hover' zoomScale={1}
                                            src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-34.jpg'
                                        />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <Swiper
                            slidesPerGroup={1}
                            spaceBetween={0}
                            navigation={true}
                            slidesPerView={4}
                            modules={[Navigation]}
                            className='zoomSlider mt-3'
                            ref={zoomSlider}
                        >
                            <SwiperSlide>
                                <div className={`item ${slideIndex === 0 && 'item_active'}`}>
                                    <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60.jpg'
                                        onClick={() => goto(0)}
                                        className='w-100' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`item ${slideIndex === 1 && 'item_active'}`}>
                                    <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-46.jpg'
                                        onClick={() => goto(1)}
                                        className='w-100' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`item ${slideIndex === 2 && 'item_active'}`}>
                                    <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-34.jpg'
                                        onClick={() => goto(2)} className='w-100' />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='col-md-7'>
                        <div className='d-flex info align-items-center mb-3'>
                            <span className='oldPrice lg mr-2'>50.000đ</span>
                            <span className='netPrice text-danger lg'>40.000đ</span>
                        </div>
                        <span className='badge bg-success'>Còn hàng</span>
                        <p className='mt-3'>Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>
                        <div className='d-flex align-items-center'>
                            <QuanntityBox />
                            <Button className='btn-blue btn-lg btn-big btn-round ml-3'>Thêm vào giỏ hàng</Button>
                        </div>
                        <div className='d-flex align-items-center mt-4 actions'>
                            <Button className='btn-round btn-sml' variant='outlined'><IoIosHeartEmpty /> &nbsp; Yêu thích</Button>
                            <Button className='btn-round btn-sml ml-3' variant='outlined'><MdCompareArrows /> &nbsp; So sánh</Button>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default ProductModal