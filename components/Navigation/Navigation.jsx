import { useEffect, useState } from "react";
import NavItem from "./NavItem";
import Link from "next/link";
import Image from "next/image";
import Router, { useRouter } from "next/router";

const Navigation = (props) => {
    const router = useRouter();
    const redirect = (path) => {
        router.push(path);
    };
    return (
        <div className="flex-1">
            <ul className="lg:flex py-3 items-center hidden gap-10">
                <NavItem className="navItem" title="Home" redirect={() => redirect("/")}/>
                <NavItem className="navItem" title="About" redirect={() => redirect("/about")} />
                <NavItem className="navItem" title="Collections" redirect={() => redirect("/collections")}  />
                <NavItem className="navItem" title="Pages" />
                <NavItem className="navItem" title="Contact" redirect={() => redirect("/contact")} />
                <NavItem className="navItem" title="Sign in" redirect={() => redirect("/login")}/>
            </ul>
        </div>
    )
}

export default Navigation;