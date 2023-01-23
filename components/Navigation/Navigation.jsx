import { useEffect, useState } from "react";
import NavItem from "./NavItem";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
    return (
        <div className="flex-1">
            <ul className="lg:flex py-3 items-center hidden gap-10">
                <NavItem title="Home"/>
                <NavItem title="About"/>
                <NavItem title="Collections"/>
                <NavItem title="Pages"/>
                <NavItem title="Contact"/>
                <NavItem title="Join Now"/>
            </ul>
        </div>
    )
}

export default Navigation;