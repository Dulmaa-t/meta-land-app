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
            <div className="flex flex-col gap-4 mr-10">
                <h6 className="sub-title text-[20px]">We are Monteno NFT</h6>
                <h1 className="text-[42px]">Collect Next Generation NFTs Today</h1>
                <p className="text-[20px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                <button className="rounded-full py-4 px-10 text-white bg-orange w-[240px]">Get Connected</button>
            </div>
            <div className="flex flex-1 flex-row">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}>
                    <SwiperSlide><Image alt="item1" src={item1} /></SwiperSlide>
                    <SwiperSlide><Image alt="item1" src={item2} /></SwiperSlide>
                    <SwiperSlide><Image alt="item1" src={item3} /></SwiperSlide>
                </Swiper>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}>
                    <SwiperSlide><Image alt="item1" src={item4} /></SwiperSlide>
                    <SwiperSlide><Image alt="item1" src={item5} /></SwiperSlide>
                    <SwiperSlide><Image alt="item1" src={item8} /></SwiperSlide>
                </Swiper>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}>
                    <SwiperSlide><Image alt="item1" src={item2} /></SwiperSlide>
                    <SwiperSlide><Image alt="item1" src={item1} /></SwiperSlide>
                    <SwiperSlide><Image alt="item1" src={item1} /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Banner;