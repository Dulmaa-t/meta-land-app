import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../Navigation/Navigation";
import Logo from "../../public/logo.png";


const Header = ({}) => {
    return (
        <div className="w-full flex justify-between items-center gap-8 container mx-80">
            <Image src={Logo} alt="logo"/>
            <Navigation/>
        </div>
    )
}

export default Header;