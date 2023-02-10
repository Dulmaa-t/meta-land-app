import Image from "next/image";
import Link from "next/link";
import nft4 from "../../public/group-ntf-04.png";

const SubBanner = () => {
    return (
        <>
            <div className="">
                <div className="subBanner flex justify-between">
                    <div className="w-80">
                        <h1 className="text-[42px] font-bold">Contact</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                    </div>
                    <div className="flex text-center">
                        <Image src={nft4} alt="nft4" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubBanner;