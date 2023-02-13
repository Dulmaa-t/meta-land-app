import Image from "next/image";
import Link from "next/link";
import SubBanner from "../components/SubBanner/SubBanner";
import item26 from "../public/item-26.png";

const Collections = () => {
    return (
        <div className="container mx-auto py-20">
            <SubBanner />
            <div className="flex flex-row my-20">
                <div className="flex">
                    <Image src={item26} alt="item26" />
                </div>
                <div className="flex-1 px-20" data-aos="fade-up">
                    <h1>About Monteno ii</h1>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occae cat cupidatat non proident, sunt in culpa</p>
                    <h2>Features</h2>
                    <h2>Likes</h2>
                </div>
            </div>
        </div>
    )
}

export default Collections;