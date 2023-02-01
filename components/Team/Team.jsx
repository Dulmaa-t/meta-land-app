import Image from "next/image";
import Link from "next/link";
import team1 from "../../public/team-01.jpg";
import team2 from "../../public/team-02.jpg";
import team3 from "../../public/team-03.jpg";
import team4 from "../../public/team-04.jpg";
import team5 from "../../public/team-05.jpg";
import team6 from "../../public/team-06.jpg";

const Team = () => {
    return (
        <div className="flex flex-wrap py-20 gap-8 justify-center items-center">
            <div className="rounded-full border-purple border-4">
                <Image src={team1} alt="team1" height={270} className="rounded-full w-[220px] h-[220px] "/>
            </div>
            <div className=""></div>
            <div className="rounded-full border-purple border-4">
                <Image src={team2} alt="team2" className="rounded-full w-[220px] h-[220px]"/>
            </div>
            <div className="rounded-full border-purple border-4">
                <Image src={team3} alt="team3" className="rounded-full w-[220px] h-[220px]"/>
            </div>
            <div className="rounded-full border-purple border-4">
                <Image src={team4} alt="team4" className="rounded-full w-[220px] h-[220px]"/>
            </div>
            <div className="rounded-full border-purple border-4">
                <Image src={team5} alt="team5" className="rounded-full w-[220px] h-[220px]"/>
            </div>
            <div className="rounded-full border-purple border-4">
                <Image src={team6} alt="team6" className="rounded-full w-[220px] h-[220px]"/>
            </div>
            <div className="rounded-full border-purple border-4">
                <Image src={team1} alt="team1" className="rounded-full w-[220px] h-[220px]"/>
            </div>
        </div>
    )
}

export default Team;