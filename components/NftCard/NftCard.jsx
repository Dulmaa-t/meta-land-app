import Image from "next/image";
import Link from "next/link";
import montono7 from "../../public/montono-07.png";
import montono2 from "../../public/montono-02.png";
import montono3 from "../../public/montono-03.png";
import montono4 from "../../public/montono-04.png";
import montono5 from "../../public/montono-05.png";
import montono6 from "../../public/montono-06.png";

const NftCard = () => {
    return (
        <div className="py-10">
            <p className="text-center text-[20px]">NFT Portfolio Collections</p>
            <h1 className="text-center text-[42px]">Checkout Our NFT Collections</h1>
            <div className="my-8">
                <div className="flex flex-row gap-4 mb-4 w-[378px] h-[378px]">
                    <Image src={montono7} alt="montono7" />
                    <Image src={montono2} alt="montono2" />
                    <Image src={montono3} alt="montono3" />
                </div>
                <div className="flex flex-row gap-4 w-[378px] h-[378px]">
                    <Image src={montono4} alt="montono4" />
                    <Image src={montono5} alt="montono5" />
                    <Image src={montono6} alt="montono6" />
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button className="border rounded-full border-orange py-2 px-4">View All</button>
            </div>

        </div>
    )
}

export default NftCard;