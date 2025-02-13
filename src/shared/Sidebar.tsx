import "./style/Sidebar.css";
import { IoMdHome } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { SiCarrd } from "react-icons/si";
import { MdOutlinePolicy } from "react-icons/md";
import { HiMenuAlt1, HiMenu } from "react-icons/hi";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logout from "../main/pages/Logout";

function Sidebar({
    prenetPage,
    showTeam = true,
    showAddProperty = true,
    showBalance = true,
    showOffers = true,
    showRequests = true,
    showProjects = true,
    showPayments = true,
}: {
    prenetPage?: string;
    showTeam?: boolean;
    showAddProperty?: boolean;
    showBalance?: boolean;
    showOffers?: boolean;
    showRequests?: boolean;
    showProjects?: boolean;
    showPayments?: boolean;
}) {
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const menuHandler = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <aside
            dir="rtl"
            className={`sidebar-main sticky top-0 lg:w-[265px] w-full px-[20px] lg:py-[50px] py-[20px] lg:bg-[#d1e8e24d] bg-[#ffffffdf] h-fit lg:min-h-screen min-h-fit`}
        >
            <h1 className="sidebar-header lg:text-center text-start flex justify-between items-center">
                قيم-QAIM
                <button
                    className="lg:hidden text-6xl cursor-pointer"
                    onClick={menuHandler}
                >
                    {openMenu ? <HiMenuAlt1 /> : <HiMenu />}
                </button>
            </h1>

            <section
                className={`sidebar-content ${
                    openMenu ? "flex" : "lg:flex hidden"
                }`}
            >
                <div className="sidebar-item">
                    <IoMdHome className="sidebar-icon" />
                    <NavLink
                        to={prenetPage ? `/${prenetPage}` : "/"}
                        className={({ isActive }) =>
                            isActive
                                ? "sidebar-link !text-[#c29062]"
                                : "sidebar-link"
                        }
                        end
                    >
                        الرئيسية
                    </NavLink>
                </div>

                {showTeam && (
                    <div className="sidebar-item">
                        <MdGroups className="sidebar-icon" />
                        <NavLink
                            to={
                                prenetPage
                                    ? `/${prenetPage}/add-team`
                                    : "add-team"
                            }
                            className={({ isActive }) =>
                                isActive
                                    ? "sidebar-link !text-[#c29062]"
                                    : "sidebar-link"
                            }
                        >
                            الفريق
                        </NavLink>
                    </div>
                )}

                {showAddProperty && (
                    <div className="sidebar-item">
                        <MdGroups className="sidebar-icon" />
                        <NavLink
                            to={
                                prenetPage
                                    ? `/${prenetPage}/add-property`
                                    : "add-property"
                            }
                            className={({ isActive }) =>
                                isActive
                                    ? "sidebar-link !text-[#c29062]"
                                    : "sidebar-link"
                            }
                        >
                            اضافة عقار
                        </NavLink>
                    </div>
                )}

                {showProjects && (
                    <div className="sidebar-item">
                        <MdGroups className="sidebar-icon" />
                        <NavLink
                            to={
                                prenetPage
                                    ? `/${prenetPage}/projects`
                                    : "projects"
                            }
                            className={({ isActive }) =>
                                isActive
                                    ? "sidebar-link !text-[#c29062]"
                                    : "sidebar-link"
                            }
                        >
                            المشاريع
                        </NavLink>
                    </div>
                )}

                {showBalance && (
                    <div className="sidebar-item">
                        <BiSolidOffer className="sidebar-icon" />
                        <NavLink
                            to={
                                prenetPage
                                    ? `/${prenetPage}/balance`
                                    : "balance"
                            }
                            className={({ isActive }) =>
                                isActive
                                    ? "sidebar-link !text-[#c29062]"
                                    : "sidebar-link"
                            }
                        >
                            رصيدي
                        </NavLink>
                    </div>
                )}

                {showOffers && (
                    <div className="sidebar-item">
                        <BiSolidOffer className="sidebar-icon" />
                        <NavLink
                            to={prenetPage ? `/${prenetPage}/offers` : "offers"}
                            className={({ isActive }) =>
                                isActive
                                    ? "sidebar-link !text-[#c29062]"
                                    : "sidebar-link"
                            }
                        >
                            عروض
                        </NavLink>
                    </div>
                )}

                {showRequests && (
                    <div className="sidebar-item">
                        <SiCarrd className="sidebar-icon" />
                        <NavLink
                            to={
                                prenetPage
                                    ? `/${prenetPage}/requests`
                                    : "requests"
                            }
                            className={({ isActive }) =>
                                isActive
                                    ? "sidebar-link !text-[#c29062]"
                                    : "sidebar-link"
                            }
                        >
                            طلبات
                        </NavLink>
                    </div>
                )}

                {showPayments && (
                    <div className="sidebar-item">
                        <MdOutlinePayment className="sidebar-icon" />
                        <NavLink
                            to={
                                prenetPage
                                    ? `/${prenetPage}/payments`
                                    : "payments"
                            }
                            className={({ isActive }) =>
                                isActive
                                    ? "sidebar-link !text-[#c29062]"
                                    : "sidebar-link"
                            }
                        >
                            المدفوعات
                        </NavLink>
                    </div>
                )}

                {
                    <div className="sidebar-item">
                        <MdOutlinePolicy className="sidebar-icon" />
                        <NavLink
                            to={
                                prenetPage
                                    ? `/${prenetPage}/terms-conditions`
                                    : "terms-conditions"
                            }
                            className={({ isActive }) =>
                                isActive
                                    ? "sidebar-link !text-[#c29062]"
                                    : "sidebar-link"
                            }
                        >
                            شروط واحكام
                        </NavLink>
                    </div>
                }

                <div className="sidebar-item">
                    <IoSettingsOutline className="sidebar-icon" />
                    <NavLink
                        to={prenetPage ? `/${prenetPage}/settings` : "settings"}
                        className={({ isActive }) =>
                            isActive
                                ? "sidebar-link !text-[#c29062]"
                                : "sidebar-link"
                        }
                    >
                        الاعدادات
                    </NavLink>
                </div>

                <div className="sidebar-item">
                    <Logout />
                </div>
            </section>
        </aside>
    );
}

export default Sidebar;
