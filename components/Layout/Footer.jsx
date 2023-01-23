import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import { FaYoutube, FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col gap-8 my-20">
                <div className="flex items-center justify-center"><Image src={logo} alt="logo"/></div>
                <p className="text-center px-[400px] py-[10px]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit ani</p>
                <div className="flex flex-row justify-center gap-4 text-[20px]">
                    <Link href={`/`}>
                        <div className="rounded-full p-4 bg-whitePurple transition transform hover:transition-all">
                            <FaFacebookF />
                        </div>
                    </Link>
                    <Link href={`/`}>
                        <div className="rounded-full p-4 bg-whitePurple">
                            <FaTwitter />
                        </div>
                    </Link>
                    <Link href={`/`}>
                        <div className="rounded-full p-4 bg-whitePurple">
                            <FaLinkedinIn />
                        </div>
                    </Link>
                    <Link href={`/`}>
                        <div className="rounded-full p-4 bg-whitePurple">
                            < FaYoutube />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;