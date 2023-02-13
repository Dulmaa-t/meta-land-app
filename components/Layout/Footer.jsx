import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import { FaYoutube, FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className="flex flex-row container mx-auto gap-24 py-20 justify-center items-center">
            <div className="flex flex-col gap-4">
                <div className="flex"><Image src={logo} alt="logo" /></div>
                <p className="w-[300px]">Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat pariatur.</p>
                <div className="flex flex-row gap-4 text-[20px]">
                    <Link href={`/`}>
                        <div className="rounded-full p-4 bg-whitePurple transition transform hover:transition-all hover:bg-blue-500">
                            <FaFacebookF className="icon" />
                        </div>
                    </Link>
                    <Link href={`/`}>
                        <div className="rounded-full p-4 bg-whitePurple hover:bg-blue-400">
                            <FaTwitter className="icon" />
                        </div>
                    </Link>
                    <Link href={`/`}>
                        <div className="rounded-full p-4 bg-whitePurple hover:bg-blue-300">
                            <FaLinkedinIn className="icon" />
                        </div>
                    </Link>
                    <Link href={`/`}>
                        <div className="rounded-full p-4 bg-whitePurple hover:bg-red-700">
                            <FaYoutube className="icon" />
                        </div>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
                <h6 className="font-bold">Quick links</h6>
                <ul className="gap-2 leading-8">
                    <li>NFT Trading</li>
                    <li>Development</li>
                    <li>Advertisement</li>
                    <li>Career</li>
                </ul>
            </div>
            <div className="flex flex-col gap-2 mt-4">
                <h6 className="font-bold">Help</h6>
                <ul className="gap-2 leading-8 w-28">
                    <li>About Us</li>
                    <li>Team Members</li>
                    <li>Support</li>
                    <li>Refund Policy</li>
                </ul>
            </div>
            <div className="flex flex-col gap-2 mt-4">
                <h6 className="font-bold">Quick links</h6>
                <p className="my-2">Duis aute irure dolor in reprehen derit in voluptate velit.</p>
                <div className="relative">
                    <input className='bg-white rounded-lg py-4 px-4 text-black' placeholder='Your email here' />
                    <MdEmail className="text-orange absolute top-4 text-[28px] right-4" />
                </div>
            </div>
        </div>
    )
}

export default Footer;