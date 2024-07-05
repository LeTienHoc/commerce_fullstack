import React from 'react'
import Slider from "react-slick";
const HomeBanner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
    };
    return (
        <div className='container mt-3'>
            <div className='homeBannerSection'>
                <Slider {...settings}>
                    <div className='item'>
                        <img src='https://theme.hstatic.net/200000037048/1001083096/14/slideshow_1.jpg?v=784' className='w-100' />
                    </div>
                    <div className='item'>
                        <img src='https://theme.hstatic.net/200000037048/1001083096/14/slideshow_4.jpg?v=784' className='w-100' />
                    </div>
                    <div className='item'>
                        <img src='https://theme.hstatic.net/200000037048/1001083096/14/slideshow_3.jpg?v=784' className='w-100' />
                    </div>
                    <div className='item'>
                        <img src='https://theme.hstatic.net/200000037048/1001083096/14/slideshow_2.jpg?v=784' className='w-100' />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default HomeBanner