import Image from "next/image";
import Link from "next/link";
import team1 from "../../public/team-01.jpg";

const Team = () => {
    return (
        <div className="flex flex-row py-20 gap-8">
            <div className="rounded-full border-purple border-4">
                <Image src={team1} alt="team1" className="rounded-full w-[270px] h-[270px] "/>
            </div>
            <div className="rounded-full border-purple border-4">
                <Image src={team1} alt="team1" className="rounded-full w-[270px] h-[270px]"/>
            </div>
            <div className="rounded-full border-purple border-4">
                <Image src={team1} alt="team1" className="rounded-full w-[270px] h-[270px]"/>
            </div>
            <div className="rounded-full border-purple border-4">
                <Image src={team1} alt="team1" className="rounded-full w-[270px] h-[270px]"/>
            </div>
        </div>
    )
}

export default Team;