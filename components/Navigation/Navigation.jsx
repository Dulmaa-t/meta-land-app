import { useEffect, useState } from "react";
import NavItem from "./NavItem";
import Link from "next/link";
import Image from "next/image";
import Router, { useRouter } from "next/router";

const Navigation = () => {
    const router = useRouter();
    const redirect = (path) => {
        router.push(path);
    };
    return (
        <div className="flex-1">
            <ul className="lg:flex py-3 items-center hidden gap-10">
                <NavItem title="Home" redirect={() => redirect("/")} />
                <NavItem title="About" redirect={() => redirect("/about")} />
                <NavItem title="Collections" redirect={() => redirect("/collections")}  />
                <NavItem title="Pages" />
                <NavItem title="Contact" redirect={() => redirect("/contact")} />
                <NavItem title="Join Now" />
            </ul>
        </div>
    )
}

export default Navigation;