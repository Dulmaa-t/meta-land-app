import Link from "next/link";
import Image from "next/image";
import SubBanner from "../components/SubBanner/SubBanner";

const Login = () => {
    return (
        <>
            <div className="container mx-auto">
                <SubBanner />
                <div className="flex flex-col my-20 rounded-lg border border-purple p-10 w-[450px] gap-4">
                    <input className="rounded-md h-[40px] px-2 py-1 text-[#333] border-none" placeholder="user name"/>
                    <input className="rounded-md h-[40px] px-2 py-1 text-[#333] border-none" placeholder="password"/>
                    <button className="bg-whitePurple rounded-md px-2 py-1">Log In</button>
                </div>
            </div>
        </>
    )
}

export default Login;