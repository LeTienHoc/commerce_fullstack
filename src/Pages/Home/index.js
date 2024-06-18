import HomeBanner from "../../Components/HomeBanner"
import banner_box from "../../assets/images/banner-box.jpg"
import banner2 from "../../assets/images/banner2.png"
import Button from '@mui/material/Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";
import banner4 from "../../assets/images/banner4.png"
import banner5 from "../../assets/images/banner5.png"
import coupon from "../../assets/images/coupon.png";
import { IoMailOutline } from "react-icons/io5";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeCat />
      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
                <div className="banner">
                  <img src={banner_box} className="cursor w-100" />
                </div>

                <div className="banner mt-4">
                  <img src={banner2} className="cursor w-100" />
                </div>
              </div>
            </div>
            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">Lựa chọn tốt nhất</h3>
                  <p className="text-light text-sml mb-0">Đừng bỏ lỡ các ưu đãi hiện tại cho đến cuối tháng 9</p>
                </div>

                <Button className="viewAllBtn ml-auto">
                  Xem tất cả
                  <IoIosArrowRoundForward />
                </Button>
              </div>
              <div className="product_row w-100 mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                </Swiper>
              </div>



              <div className="d-flex align-items-center mt-5">
                <div className="info w-75">
                  <h3 className="mb-0 hd">Sản phẩm mới</h3>
                  <p className="text-light text-sml mb-0">Đừng bỏ lỡ các ưu đãi hiện tại cho đến cuối tháng 9</p>
                </div>

                <Button className="viewAllBtn ml-auto">
                  Xem tất cả
                  <IoIosArrowRoundForward />
                </Button>
              </div>
              <div className="product_row productRow2 w-100 mt-4 d-flex">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </div>
              <div className="d-flex mt-4 mb-5 bannerSec">
                <div className="banner">
                  <img src={banner4} className="cursor w-100" />
                </div>
                <div className="banner">
                  <img src={banner5} className="cursor w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">Giảm giá thêm 5% cho lần mua đầu tiên</p>
              <h3 className="text-white">Tham gia bản tin của chúng tôi và nhận được...</h3>
              <p className="text-light">Tham gia đăng ký email của chúng tôi ngay bây giờ để nhận thông tin cập nhật <br /> về các chương trình khuyến mãi và phiếu giảm giá.</p>
              <form>
                <IoMailOutline />
                <input type="text" placeholder="Địa chỉ Email của bạn"/>
                <Button>Đăng ký</Button>
              </form>
            </div>
            <div className="col-md-6">
              <img src={coupon} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home