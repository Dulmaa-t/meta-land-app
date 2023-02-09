import Image from "next/image";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';

import montono7 from "../../public/montono-07.png";
import montono2 from "../../public/montono-02.png";
import montono3 from "../../public/montono-03.png";
import montono4 from "../../public/montono-04.png";
import montono5 from "../../public/montono-05.png";
import montono6 from "../../public/montono-06.png";

const NftCard = () => {
    return (
        <div className="py-10">
            <p className="text-center text-[20px]" data-aos="fade-up">NFT Portfolio Collections</p>
            <h1 className="text-center text-[42px]" data-aos="fade-up">Checkout Our NFT Collections</h1>
            <div className="my-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-4 w-full" data-aos="fade-up">
                    <Image src={montono7} alt="montono7" />
                    <Image src={montono2} alt="montono2" />
                    <Image src={montono3} alt="montono3" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 w-full h-[378px]" data-aos="fade-up">
                    <Image src={montono4} alt="montono4" />
                    <Image src={montono5} alt="montono5" />
                    <Image src={montono6} alt="montono6" />
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button className="fillskewopen border rounded-full border-orange py-2 px-4">View All</button>
            </div>

        </div>
    )
}

export default NftCard;