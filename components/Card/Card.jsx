import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import chat from "../../public/chat.png";
import badge from "../../public/badge.png";
import provision from "../../public/provision.png";
import hosting from "../../public/hosting.png";

const Card = () => {
    return (
        <div className="flex flex-row gap-8 my-10">
            <div className="perspective rounded-lg bg-purple p-10 h-[350px]" style={{ willChange: 'transform', transform: 'perspective(1000px)', rotateX: '(0deg)', rotateY: '(0deg)', scale3d: '(1, 1, 1)' }}>
                <Image src={hosting} alt="hosting" />
                <h1 className="text-[24px] py-4">Huge Collection</h1>
                <p>Oficia dese runt mollit anim id est labo met, consectetur adipis</p>
            </div>
            <div className="perspective rounded-lg bg-purple p-10 mt-[60px] h-[350px]">
                <Image src={provision} alt="hosting" />
                <h1 className="text-[24px] py-4">Top Resource</h1>
                <p>Oficia dese runt mollit anim id est labo met, consectetur adipis</p>
            </div>
            <div className=" perspective rounded-lg bg-purple p-10 h-[350px]">
                <Image src={badge} alt="hosting" />
                <h1 className="text-[24px] py-4">High Quality</h1>
                <p>Oficia dese runt mollit anim id est labo met, consectetur adipis</p>
            </div>
            <div className=" perspective rounded-lg bg-purple p-10 mt-[60px] h-[350px]">
                <Image src={chat} alt="hosting" />
                <h1 className="text-[24px] py-4">Big Community</h1>
                <p>Oficia dese runt mollit anim id est labo met, consectetur adipis</p>
            </div>
        </div>
    )
}

export default Card;