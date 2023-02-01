import Image from "next/image";
import Link from "next/link";
import technology from "../../public/technology.png";
import timestaps from "../../public/timestaps.png";
import payment from "../../public/paymentt.png";
import lock from "../../public/lock.png";
import database from "../../public/database.png";

const Technology = () => {
    return (
        <div className="flex justify-between mt-10">
            <div className="flex md:flex-col sm:flex-row sm:my-4 mr-10">
                <div className="flex flex-row gap-4 my-4">
                    <div className="rounded-md py-8 px-8 bg-purple">
                        <div className="icon bg-white rounded-full p-4 w-16 h-16 flex items-center justify-center">
                            <Image src={database} alt="database" />
                        </div>
                        <h6 className="my-4 font-bold text-[24px] hover:text-red-500">Safe Database</h6>
                        <p className="text-[16px]">Aliquam erat volutpat. Fusce sit amet</p>
                    </div>
                    <div className="rounded-md py-8 px-8 bg-purple">
                        <div className="icon bg-white rounded-full p-4 w-16 h-16 flex items-center justify-center">
                            <Image src={lock} alt="lock" />
                        </div>
                        <h6 className="my-4 font-bold text-[24px] hover:text-red-500">Safe Database</h6>
                        <p className="text-[16px]">Aliquam erat volutpat. Fusce sit amet</p>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="rounded-md py-8 px-8 bg-purple">
                        <div className="icon bg-white rounded-full p-4 w-16 h-16 flex items-center justify-center">
                            <Image src={payment} alt="payment" />
                        </div>
                        <h6 className="my-4 font-bold text-[24px] hover:text-red-500">Safe Database</h6>
                        <p className="text-[16px]">Aliquam erat volutpat. Fusce sit amet</p>
                    </div>
                    <div className="rounded-md py-8 px-8 bg-purple">
                        <div className="icon bg-white rounded-full p-4 w-16 h-16 flex items-center justify-center">
                            <Image src={timestaps} alt="timestaps" />
                        </div>
                        <h6 className="my-4 font-bold text-[24px] hover:text-red-500">Safe Database</h6>
                        <p className="text-[16px]">Aliquam erat volutpat. Fusce sit amet</p>
                    </div>
                </div>
                <div className="flex flex-row"></div>
            </div>
            <div className="justify-center items-center flex">
                <Image src={technology} alt="technology" className="technology_img"/>
            </div>
        </div>
    )
}

export default Technology;