import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../Navigation/Navigation";
import Logo from "../../public/logo.png";


const Header = ({ }) => {
    return (
        <div className="header is-fixed is-small flex justify-between items-center gap-8" style={{ position: `fixed`, top: '0', left: '0', right: '0', zIndex: '1000', alignItems: 'center', width: '100%' }}>
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <Link href={`/`}>
                        <div className="flex justify-center items-center my-4">
                            <Image src={Logo} alt="logo" />
                        </div>
                    </Link>
                    <div>
                        <Navigation />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;