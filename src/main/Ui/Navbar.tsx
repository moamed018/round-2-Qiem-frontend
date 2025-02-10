import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoPerson, IoMenu, IoClose } from "react-icons/io5";
import Logo from "../../assets/QAIM-logo.png";
import LinkButton from "./LinkButton";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#f5f5f560] py-2 sm:px-8 px-2 flex justify-between items-center">
            <div className="w-30">
                <img src={Logo} alt="QAIM Logo" />
            </div>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-3xl text-white"
            >
                {isOpen ? <IoClose /> : <IoMenu />}
            </button>

            <ul
                className={`lg:flex items-center space-x-8 absolute lg:relative top-22 lg:top-auto left-0 w-full lg:w-auto bg-[#f5f5f5d8] lg:bg-transparent shadow-lg lg:shadow-none transition-all duration-300 ${
                    isOpen ? "block" : "hidden"
                }`}
            >
                {[
                    { to: "/", label: "الرئيسية" },
                    { to: "/about", label: "من نحن" },
                    { to: "/contact", label: "تواصل معنا" },
                    { to: "/help", label: "المساعدة" },
                ].map(({ to, label }) => (
                    <li key={to} className="flex p-4 lg:p-0">
                        <NavLink
                            to={to}
                            className={({ isActive }) =>
                                `text-xl font-bold pb-1 hover:text-[#C29062] border-b-2 hover:border-b-[#C29062] duration-200 ${
                                    isActive
                                        ? "text-[#C29062] border-b-[#C29062]"
                                        : "text-gray-800 lg:text-white border-b-transparent"
                                }`
                            }
                        >
                            {label}
                        </NavLink>
                    </li>
                ))}
                <LinkButton
                    to="/login"
                    fullRounded
                    className="text-xl font-bold flex items-center lg:hidden gap-2 w-fit mb-2"
                >
                    <IoPerson />
                    تسجيل الدخول
                </LinkButton>
            </ul>

            <LinkButton
                to="/login"
                fullRounded
                className="text-xl font-bold hidden items-center gap-2 lg:flex"
            >
                <IoPerson />
                تسجيل الدخول
            </LinkButton>
        </nav>
    );
};

export default Navbar;

{
    /* <nav className="flex justify-between items-center py-2 px-8 bg-[#f5f5f560]">
                <div className="w-30">
                    <img src={Logo} alt="QAIM Logo" />
                </div>

                <ul className="flex items-center space-x-8">
                    <li className="flex">
                        <NavLink
                            to="/"
                            className={({ isActive }: { isActive: boolean }) =>
                                `text-xl font-bold pb-1 hover:text-[#C29062] border-b-2  hover:border-b-[#C29062] duration-200 ${
                                    isActive
                                        ? "text-[#C29062] border-b-[#C29062]"
                                        : "text-white border-b-transparent"
                                }`
                            }
                        >
                            الرئيسية
                        </NavLink>
                    </li>
                    <li className="flex">
                        <NavLink
                            to="/about"
                            className={({ isActive }: { isActive: boolean }) =>
                                `text-xl font-bold pb-1 hover:text-[#C29062] border-b-2  hover:border-b-[#C29062] duration-200 ${
                                    isActive
                                        ? "text-[#C29062] border-b-[#C29062]"
                                        : "text-white border-b-transparent"
                                }`
                            }
                        >
                            من نحن
                        </NavLink>
                    </li>
                    <li className="flex">
                        <NavLink
                            to="/contact"
                            className={({ isActive }: { isActive: boolean }) =>
                                `text-xl font-bold pb-1 hover:text-[#C29062] border-b-2  hover:border-b-[#C29062] duration-200 ${
                                    isActive
                                        ? "text-[#C29062] border-b-[#C29062]"
                                        : "text-white border-b-transparent"
                                }`
                            }
                        >
                            تواصل معنا
                        </NavLink>
                    </li>
                    <li className="flex">
                        <NavLink
                            to="/help"
                            className={({ isActive }: { isActive: boolean }) =>
                                `text-xl font-bold pb-1 hover:text-[#C29062] border-b-2  hover:border-b-[#C29062] duration-200 ${
                                    isActive
                                        ? "text-[#C29062] border-b-[#C29062]"
                                        : "text-white border-b-transparent"
                                }`
                            }
                        >
                            المساعدة
                        </NavLink>
                    </li>
                </ul>

                <LinkButton
                    to="/login"
                    fullRounded
                    className="text-xl font-bold flex items-center gap-2"
                >
                    <IoPerson />
                    تسجيل الدخول
                </LinkButton>
            </nav> */
}
