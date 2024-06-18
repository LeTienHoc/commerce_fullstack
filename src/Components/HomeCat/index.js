import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const HomeCat = () => {

  const [itemBg, setItemBg] = useState(['#fffceb', '#ecffec', '#fff3eb', '#fff3ff', '#f2fce4', '#feefea', '#fffceb', '#feefea', '#fffceb', '#feefea', '#fffceb', '#feefea', '#fffceb'])
  return (
    <section className="homeCat">
      <div className="container">
        <h3 className="mt-4 hd">Danh mục sản phẩm</h3>
        <Swiper
          slidesPerView={10}
          spaceBetween={8}
          slidesPerGroup={3}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {
            itemBg?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="item text-center cursor" style={{ background: item }}>
                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-12.png" />
                    <h6>Organic Kiwi</h6>
                  </div>
                </SwiperSlide>
              )
            })
          }

        </Swiper>
      </div>
    </section>
  )
}

export default HomeCat