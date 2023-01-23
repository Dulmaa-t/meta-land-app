import Link from "next/link";

const NavItem = (props) => {
    return (
        <li
            onClick={props.btn ? props.popup : () => { }}
            className={`font-[500] text-base xl:text-[20px] cursor-pointer navIt w-max py-3 ${props.active ? "text-black" : "text-[#fff]"} ${props.btn ? "border border-[#fd562a] text-white py-2 px-6 xl:mx-2 rounded-[27px]" : props.login ? "flex items-center ml-4 gap-4" : ""} flex items-center`}>
            {props.btn ? (
                <p>{props.title}</p>
            ) : (
                <p onClick={props.redirect}>{props.title}</p>
            )}
        </li>
    )
}

export default NavItem;