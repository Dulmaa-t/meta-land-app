import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SubBanner from "../components/SubBanner/SubBanner";


const Contact = () => {
    return (
        <div className="container mx-auto py-20">
           <SubBanner />
            <div className="text-center mt-20">
                <p className="">Send Message</p>
                <h1 className="text-[42px]">Write Us Message for Any Reason</h1>
            </div>
            <div className="flex justify-between py-20">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row gap-4">
                        <div className="bg-whitePurple rounded-full w-14 h-14 flex items-center justify-center" >
                            <FaMapMarkerAlt />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h1>Address</h1>
                            <p>20, Backway Road, New York, US AB42</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <div className="bg-whitePurple rounded-full w-14 h-14 flex items-center justify-center" >
                            <FaPhoneAlt />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h1>Phone</h1>
                            <p>+123 456 7890</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <div className="bg-whitePurple rounded-full w-14 h-14 flex items-center justify-center" >
                            <MdEmail />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h1>Email</h1>
                            <p>hello@nftportfolio.com</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <form className="text-black">
                        <div className="flex flex-row gap-4 pb-4">
                            <input className='bg-white rounded-lg text-black px-4 py-4' placeholder='Your name' />
                            <input className='bg-white rounded-lg text-black px-4 py-4' placeholder='Your email' />
                        </div>
                        <div className="flex flex-row gap-4 pb-4">
                            <input className='bg-white rounded-lg text-black px-4 py-4' placeholder='Your phone' />
                            <input className='bg-white rounded-lg text-black px-4 py-4' placeholder='Subject' />
                        </div>
                        <textarea className="w-full rounded-lg h-40 px-4 py-4" placeholder="Your message here"></textarea>
                        <button className="fillskewopen bg-orange rounded-full py-2 px-8 mt-4 text-white font-normal">Send Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;