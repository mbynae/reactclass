import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function slider() {
  return (
    <section id="sliderType" className="slider__wrap nexons">
      <div className="slider__inner">
        <Swiper
          autoplay={{
            delay: 3000,
            desableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="desc">
              <span>The Fruit</span>
              <h3>Sweet Fresh</h3>
              <p>
                싱싱한 과일이 왔어요~ 맛도 좋고 향도 좋고 몸에도 좋은 그 맛!
                <br />
                과일의 여러가지 쓰임새에 대해 알아봅시다~!
              </p>
              <div className="btn">
                <a href="/">자세히 보기</a>
                <a href="/" className="black">
                  사이트 보기
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="desc">
              <span>The Fruit</span>
              <h3>Sweet Fresh</h3>
              <p>
                싱싱한 과일이 왔어요~ 맛도 좋고 향도 좋고 몸에도 좋은 그 맛!
                <br />
                과일의 여러가지 쓰임새에 대해 알아봅시다~!
              </p>
              <div className="btn">
                <a href="/">자세히 보기</a>
                <a href="/" className="black">
                  사이트 보기
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="desc">
              <span>The Fruit</span>
              <h3>Sweet Fresh</h3>
              <p>
                싱싱한 과일이 왔어요~ 맛도 좋고 향도 좋고 몸에도 좋은 그 맛!
                <br />
                과일의 여러가지 쓰임새에 대해 알아봅시다~!
              </p>
              <div className="btn">
                <a href="/">자세히 보기</a>
                <a href="/" className="black">
                  사이트 보기
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default slider;
