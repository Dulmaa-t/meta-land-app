import Image from "next/image";
import Link from "next/link";
import Team from "../components/Team/Team";
import SubBanner from "../components/SubBanner/SubBanner";

import logo1 from "../public/logo-01.png";
import logo2 from "../public/logo-02.png";
import logo3 from "../public/logo-03.png";
import logo4 from "../public/logo-04.png";
import logo5 from "../public/logo-05.png";
import logo6 from "../public/logo-06.png";
import logo7 from "../public/logo-07.png";
import logo8 from "../public/logo-08.png";

const About = () => {
    return (
        <div className="container mx-auto">
            <SubBanner />
            <Team />
            <div className='flex flex-col'>
                <h1 className="heading-bg flex justify-center">
                    <span>Team</span>
                </h1>
                <div className="mb-20">
                    <p className='text-center text-[20px]'>Partners</p>
                    <h1 className='aos-animate text-center text-[42px] px-80 font-[500]'>We Are Partnered with Top Brands</h1>
                </div>
                <div className="flex flex-wrap w-full my-8">
                    <div className="border border-b border-[#ffffff2e] px-[90px] py-12 w-[292px]">
                        <Image src={logo1} alt="logo1" className="logo opacity-50" />
                    </div>
                    <div className="border border-b border-[#ffffff2e] px-[90px] py-12 w-[292px]">
                        <Image src={logo2} alt="logo1" className="logo opacity-50" />
                    </div>
                    <div className="border border-b border-[#ffffff2e] px-[90px] py-12 w-[292px]">
                        <Image src={logo3} alt="logo1" className="logo opacity-50" />
                    </div>
                    <div className="border border-b border-[#ffffff2e] px-[90px] py-12 w-[292px]">
                        <Image src={logo4} alt="logo1" className="logo opacity-50" />
                    </div>
                    <div className="border border-b border-[#ffffff2e] px-[90px] py-12 w-[292px]">
                        <Image src={logo5} alt="logo1" className="logo opacity-50" />
                    </div>
                    <div className="border border-b border-[#ffffff2e] px-[90px] py-12 w-[292px]">
                        <Image src={logo6} alt="logo1" className="logo opacity-50" />
                    </div>
                    <div className="border border-b border-[#ffffff2e] px-[90px] py-12 w-[292px]">
                        <Image src={logo7} alt="logo1" className="logo opacity-50" />
                    </div>
                    <div className="border border-b border-[#ffffff2e] px-[90px] py-12 w-[292px]">
                        <Image src={logo8} alt="logo1" className="logo opacity-50" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;