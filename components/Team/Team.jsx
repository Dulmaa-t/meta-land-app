import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';

import team1 from "../../public/team-01.jpg";
import team2 from "../../public/team-02.jpg";
import team3 from "../../public/team-03.jpg";
import team4 from "../../public/team-04.jpg";
import team5 from "../../public/team-05.jpg";
import team6 from "../../public/team-06.jpg";

const Team = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="flex flex-wrap py-20 gap-8 justify-center items-center" data-aos="fade-right" > 
            <div data-aos="fade-up" >
                <div className="img-team rounded-full border-purple border-4">
                    <Image src={team1} alt="team1" height={270} className="rounded-full w-[220px] h-[220px] " />
                </div>
                <div class="team-info flex flex-col items-center justify-center mt-4">
                    <a href={`/`} className="h5 font-bold">Paul Harrison</a>
                    <p className="fs-16">Founder &amp; CEO</p>
                </div>
            </div>
            <div className=""></div>
            <div data-aos="fade-up" >
                <div className="img-team rounded-full border-purple border-4">
                    <Image src={team2} alt="team2" className="rounded-full w-[220px] h-[220px]" />
                </div>
                <div class="team-info flex flex-col items-center justify-center mt-4">
                    <a href={`/`} className="h5 font-bold">Paul Harrison</a>
                    <p className="fs-16">Founder &amp; CEO</p>
                </div>
            </div>
            <div data-aos="fade-up" >
                <div className="img-team rounded-full border-purple border-4">
                    <Image src={team3} alt="team3" className="rounded-full w-[220px] h-[220px]" />
                </div>
                <div class="team-info flex flex-col items-center justify-center mt-4">
                    <a href={`/`} className="h5 font-bold">Paul Harrison</a>
                    <p className="fs-16">Founder &amp; CEO</p>
                </div>
            </div>
            <div data-aos="fade-up" >
                <div className="img-team rounded-full border-purple border-4">
                    <Image src={team4} alt="team4" className="rounded-full w-[220px] h-[220px]" />
                </div>
                <div class="team-info flex flex-col items-center justify-center mt-4">
                    <a href={`/`} className="h5 font-bold">Paul Harrison</a>
                    <p className="fs-16">Founder &amp; CEO</p>
                </div>
            </div>
            <div data-aos="fade-up" >
                <div className="img-team rounded-full border-purple border-4">
                    <Image src={team5} alt="team5" className="rounded-full w-[220px] h-[220px]" />
                </div>
                <div class="team-info flex flex-col items-center justify-center mt-4">
                    <a href={`/`} className="h5 font-bold">Paul Harrison</a>
                    <p className="fs-16">Founder &amp; CEO</p>
                </div>
            </div>
            <div data-aos="fade-up">
                <div className="img-team rounded-full border-purple border-4">
                    <Image src={team6} alt="team6" className="rounded-full w-[220px] h-[220px]" />
                </div>
                <div class="team-info flex flex-col items-center justify-center mt-4">
                    <a href={`/`} className="h5 font-bold">Paul Harrison</a>
                    <p className="fs-16">Founder &amp; CEO</p>
                </div>
            </div>
            <div data-aos="fade-up">
                <div className="img-team rounded-full border-purple border-4">
                    <Image src={team1} alt="team1" className="rounded-full w-[220px] h-[220px]" />
                </div>
                <div class="team-info flex flex-col items-center justify-center mt-4">
                    <a href={`/`} className="h5 font-bold">Paul Harrison</a>
                    <p className="fs-16">Founder &amp; CEO</p>
                </div>
            </div>
        </div>
    )
}

export default Team;