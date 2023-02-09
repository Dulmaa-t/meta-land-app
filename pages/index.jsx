import { useState, useRef, useEffect, useCallback } from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../components/Banner/Banner';
import NftCard from '../components/NftCard/NftCard';
import FAQ from '../components/FAQ/FAQ';
import Technology from '../components/Technology/Technology';
import Card from '../components/Card/Card';
import item9 from "../public/item-09.png";
import item8 from "../public/item-08.png";
import item10 from "../public/item-10.png";
import { motion } from "framer-motion";
import RoadMap from '../components/RoadMap/RoadMap';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="container mx-auto">
      <Banner />
      <div className='flex flex-row py-10'>
        <div className='flex flex-row'>
          <div className='mr-4 py-44 relative'>
            <div className='flex flex-col rounded-xl p-10 bg-purple w-[270px] h-[320px]'>
              <div className='animation-bounce flex justify-center items-center.'>
                <Image alt="item8" src={item8} />
              </div>
              <div></div>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col rounded-xl p-10 bg-purple w-[270px] h-[320px]'>
              <div className='animation-bounce flex justify-center items-center'>
                <Image alt="item9" src={item9} />
              </div>
              <div></div>
            </div>
            <div className='flex flex-col rounded-xl p-10 bg-purple w-[270px] h-[320px]'>
              <div className='animation-bounce flex justify-center items-center'>
                <Image alt="item10" src={item10} />
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className='ml-20 pt-10'>
          <span className='sub-title text-[20px]' data-aos="fade-up">About Us</span>
          <h1 className='text-[42px]' data-aos="fade-up">Hight Quality NFT Collections</h1>
          <p className='text-[20px] py-4' data-aos="fade-up">Sed ut perspiciatis unde omnis iste natus enim ad minim veniam, quis nostrud exercit</p>
          <p className='text-[20px] py-4' data-aos="fade-up">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat</p>
          <button className='fillskewopen animation-btn py-4 px-10 rounded-full text-white bg-orange w-[250px]' data-aos="fade-up">More About Us</button>
        </div>
      </div>
      <Card />
      <NftCard />
      <div className='flex flex-col my-20'>
        <p className='text-center text-[20px]' data-aos="fade-up">Technology</p>
        <h1 className='aos-animate text-center text-[42px]' data-aos="fade-up">Monteno unique Technology</h1>
        <Technology />
      </div>
      <div className='flex flex-col my-20'>
        <p className='text-center text-[20px]' data-aos="fade-up">FAQ</p>
        <h1 className='aos-animate text-center text-[42px]' data-aos="fade-up">Frequently Aksed Questions</h1>
        <FAQ />
      </div>
      <div className='flex flex-col my-20 h-[1100px]'>
        <p className='text-center text-[20px] sub-title'>Road Map</p>
        <h1 className='aos-animate text-center text-[42px]'>The Journey of Monteno NFT</h1>
        <RoadMap />
      </div>
      <div className='rounded-lg bg-whitePurple p-20 flex justify-between py-10'>
        <div>
          <h1 className='text-[42px]'>Get Newsletter</h1>
          <p className='text-black'>Get udpated with news, tips & tricks</p>
        </div>
        <div className='items-center justify-center flex'>
          <input className='bg-white rounded-l-lg w-[400px] py-4 px-8' placeholder='Your email here' />
          <button className='fillskewopen bg-orange py-4 px-8 rounded-r-lg'>Subscribe</button>
        </div>
      </div>
    </div>
  )
} 
