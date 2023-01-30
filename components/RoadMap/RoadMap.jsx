import Link from "next/link";
import { BsCheck } from "react-icons/bs";

const RoadMap = () => {
    return (
        <div>
            <div className="container my-40">
                <div className="flex flex-wrap justify-center items-center relative h-full w-full">
                    <div className="mapCard border-lg border border-purple bg-purple p-10 my-10 rounded-lg w-[470px] mx-30 absolute left-0">
                        <span><BsCheck className="text-orange bg-white rounded-full w-[34px] h-[34px]" /></span>
                        <span className="text-[#fd562a]">February 01, 2022</span>
                        <h1 className="text-[24px] font-bold">Idea Generation</h1>
                        <p>Oficia dese runt mollit anim id est labo met conse ctetur adipi smod tempor inc ididunt ut labore et dolore quis</p>
                    </div>
                    <div className="mapCard border-lg border border-purple bg-purple p-10 my-10 rounded-lg w-[470px] mx-30 absolute right-0 mt-[470px]">
                        <span><BsCheck className="text-orange bg-white rounded-full w-[34px] h-[34px]" /></span>
                        <span className="text-[#fd562a]">February 01, 2022</span>
                        <h1 className="text-[24px] font-bold">Idea Generation</h1>
                        <p>Oficia dese runt mollit anim id est labo met conse ctetur adipi smod tempor inc ididunt ut labore et dolore quis</p>
                    </div>
                    <div className="mapCard border-lg border border-purple bg-purple p-10 my-10 rounded-lg w-[470px] mx-30 absolute left-0 mt-[940px]">
                        <span><BsCheck className="text-orange bg-white rounded-full w-[34px] h-[34px]" /></span>
                        <span className="text-[#fd562a]">February 01, 2022</span>
                        <h1 className="text-[24px] font-bold">Idea Generation</h1>
                        <p>Oficia dese runt mollit anim id est labo met conse ctetur adipi smod tempor inc ididunt ut labore et dolore quis</p>
                    </div>
                    <div className="mapCard border-lg border border-purple bg-purple p-10 my-10 rounded-lg w-[470px] mx-30 absolute right-0 mt-[1310px]">
                        <span><BsCheck className="text-orange bg-white rounded-full w-[34px] h-[34px]" /></span>
                        <span className="text-[#fd562a]">February 01, 2022</span>
                        <h1 className="text-[24px] font-bold">Idea Generation</h1>
                        <p>Oficia dese runt mollit anim id est labo met conse ctetur adipi smod tempor inc ididunt ut labore et dolore quis</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoadMap;