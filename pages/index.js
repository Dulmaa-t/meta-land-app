import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../components/Banner/Banner';
import Card from '../components/Card/Card';
import item9 from "../public/item-09.png";
import item8 from "../public/item-08.png";
import item10 from "../public/item-10.png";
import NftCard from '../components/NftCard/NftCard';

export default function Home() {
  return (
    <div className="container mx-80">
      <Banner />
      <div className='flex flex-row py-10'>
        <div className='flex flex-row'>
          <div className='mr-4 py-44'>
            <div className='flex flex-col rounded-xl p-10 bg-purple w-[270px] h-[320px]'>
              <div>
                <Image alt="item8" src={item8} className="w-full h-full" style={{animation: "move 3s infinite linear"}}/>
              </div>
              <div></div>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col rounded-xl p-10 bg-purple w-[270px] h-[320px]'>
              <div className=''>
                <Image alt="item9" src={item9}/>
              </div>
              <div></div>
            </div>
            <div className='flex flex-col rounded-xl p-10 bg-purple w-[270px] h-[320px]'>
              <div className=''>
                <Image alt="item10" src={item10}/>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className='ml-20 pt-10'>
          <span className='text-[20px]'>About Us</span>
          <h1 className='text-[42px]'>Hight Quality NFT Collections</h1>
          <p className='text-[20px] py-4'>Sed ut perspiciatis unde omnis iste natus enim ad minim veniam, quis nostrud exercit</p>
          <p className='text-[20px] py-4'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat</p>
          <button className='py-4 px-10 rounded-full text-white bg-orange w-[200px]'>More About Us</button>
        </div>
      </div>
      <Card />
      <NftCard />
      <div className='rounded-lg bg-whitePurple p-10 flex flex-row py-10'>
        <div>
          <p>100<span>K</span></p>
          <p>5<span>M</span></p>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
