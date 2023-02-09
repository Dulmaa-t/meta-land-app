import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import 'swiper/css';

import item1 from "../../public/item-01.png";
import item2 from "../../public/item-02.png";
import item3 from "../../public/item-03.png";
import item4 from "../../public/item-04.png";
import item5 from "../../public/item-05.png";
import item8 from "../../public/item-08.png";

const Banner = () => {
    SwiperCore.use([Autoplay]);
    return (
        <div className="flex flex-row my-20">
            <div className="flex flex-col gap-4 pr-10 w-1/3">
                <h6 className="sub-title text-[20px]">We are Monteno NFT</h6>
                <h1 className="text-[42px]">Collect Next Generation NFTs Today</h1>
                <p className="text-[20px]" data-aos="fade-up">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                <button className="fillskewopen rounded-full py-4 px-10 text-white bg-orange w-[240px]" data-aos="fade-up">
                    <a href={`/`} className="btn-action">Get Connected</a>
                </button>
            </div>
            <div className="flex flex-1 flex-row w-[500px] h-[500px] ml-60">
                <Swiper
                    className="w-full h-full"
                    slidesPerView={3}
                    spaceBetween={0}
                    loop={true}
                    autoplay={{
                        delay: 500,
                        disableOnInteraction: false,
                    }}
                    direction={"vertical"}

                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 3,
                        },
                    }}>
                    <SwiperSlide>
                        <div className="bg-purple p-4 rounded-lg w-[150px] h-[150px]">
                            <Image alt="item2" src={item2} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-whitePurple p-4 rounded-lg w-[150px] h-[150px]">
                            <Image alt="item3" src={item3} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-purple p-4 rounded-lg w-[150px] h-[150px]">
                            <Image alt="item2" src={item2} />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    className="w-full h-full"
                    slidesPerView={3}
                    spaceBetween={0}
                    loop={true}
                    autoplay={{
                        delay: 500,
                        reverseDirection: true,
                        disableOnInteraction: false,
                    }}
                    direction={"vertical"}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 3,
                        },
                    }}>
                    <SwiperSlide>
                        <div className="bg-whitePurple p-4 rounded-lg w-[150px] h-[150px]">
                            <Image alt="item2" src={item5} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-purple p-4 rounded-lg w-[150px] h-[150px]">
                            <Image alt="item3" src={item8} width={80} height={80} className="ml-3 items-center" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-whitePurple p-4 rounded-lg w-[150px] h-[150px]">
                            <Image alt="item2" src={item4} />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    className="w-full h-full"
                    slidesPerView={3}
                    spaceBetween={1}
                    direction={"vertical"}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 3,
                        },
                    }}>
                    <SwiperSlide>
                        <div className="bg-purple p-4 rounded-lg w-[150px] h-[150px]">
                            <Image alt="item2" src={item2} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-whitePurple p-4 rounded-lg w-[150px] h-[150px]">
                            <Image alt="item3" src={item3} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-purple p-4 rounded-lg w-[150px] h-[150px]">
                            <Image alt="item2" src={item2} />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Banner;