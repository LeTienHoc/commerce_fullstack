import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

const ProductZoom = () => {
    const zoomSlider = useRef();
    const zoomSliderBig = useRef();
    const [slideIndex, setslideIndex] = useState(0)
    const goto = (index) => {
        setslideIndex(index)
        zoomSlider.current.swiper.slideTo(index)
        zoomSliderBig.current.swiper.slideTo(index)
    }
    return (
        <>
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
        </>
    )
}

export default ProductZoom