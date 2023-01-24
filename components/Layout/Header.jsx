import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../Navigation/Navigation";
import Logo from "../../public/logo.png";


const Header = ({ }) => {
    return (
        <div className="flex justify-between items-center gap-8 container mx-auto">
            <Link href={`/`}>
                <div>
                    <Image src={Logo} alt="logo" />
                </div>
            </Link>
            <div>
                <Navigation />
            </div>
        </div>
    )
}

export default Header;