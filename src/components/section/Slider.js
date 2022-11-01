import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sliderCont = {
    subject: "The Fruit",
    title: "Sweet Fresh",
    desc1: "싱싱한 과일이 왔어요~ 맛도 좋고 향도 좋고 몸에도 좋은 그 맛!",
    desc2: "과일의 여러가지 쓰임새에 대해 알아봅시다~!",
    leftLink: "/",
    rightLink: "/",
};

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
                            <span>{sliderCont.subject}</span>
                            <h3>{sliderCont.title}</h3>
                            <p>
                                {sliderCont.desc1}
                                <br />
                                {sliderCont.desc2}
                            </p>
                            <div className="btn">
                                <a href={`${sliderCont.leftLink}`}>자세히 보기</a>
                                <a href={`${sliderCont.rightLink}`} className="black">
                                    사이트 보기
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="desc">
                            <span>{sliderCont.subject}</span>
                            <h3>{sliderCont.title}</h3>
                            <p>
                                {sliderCont.desc1}
                                <br />
                                {sliderCont.desc2}
                            </p>
                            <div className="btn">
                                <a href={`${sliderCont.leftLink}`}>자세히 보기</a>
                                <a href={`${sliderCont.rightLink}`} className="black">
                                    사이트 보기
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="desc">
                            <span>{sliderCont.subject}</span>
                            <h3>{sliderCont.title}</h3>
                            <p>
                                {sliderCont.desc1}
                                <br />
                                {sliderCont.desc2}
                            </p>
                            <div className="btn">
                                <a href={`${sliderCont.leftLink}`}>자세히 보기</a>
                                <a href={`${sliderCont.rightLink}`} className="black">
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
