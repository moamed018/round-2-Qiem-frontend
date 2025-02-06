import "./style/Sidebar.css";
import { IoMdHome } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { RxExit } from "react-icons/rx";
import { MdOutlinePayment } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { SiCarrd } from "react-icons/si";
import { MdOutlinePolicy } from "react-icons/md";
<<<<<<< HEAD
<<<<<<< HEAD
import "./style/Sidebar.css";
=======
import { Link } from "react-router-dom";
>>>>>>> f8a1e6a3b8c820033d185e26e1d048af2edef77c

function Sidebar() {
  return (
    <section dir="rtl" className="sidebar-main">
      <h1 className="sidebar-header">قيم-QAIM</h1>

      <section className="sidebar-content">
        <div className="sidebar-item">
          <IoMdHome className="sidebar-icon" />
          <Link to="/" className="sidebar-link">
            الرئيسية
          </Link>
        </div>
        <div className="sidebar-item">
          <MdGroups className="sidebar-icon" />
          <Link to="/client/add-property" className="sidebar-link">
            اضافة عقار
          </Link>
        </div>
        <div className="sidebar-item">
          <BiSolidOffer className="sidebar-icon" />
          <Link to="/client/offers" className="sidebar-link">
            عروض
          </Link>
        </div>
        <div className="sidebar-item">
          <SiCarrd className="sidebar-icon" />
          <Link to="/client/requests" className="sidebar-link">
            طلبات
          </Link>
        </div>
        <div className="sidebar-item">
          <MdOutlinePayment className="sidebar-icon" />
          <Link to="/client/payments" className="sidebar-link">
            المدفوعات
          </Link>
        </div>
        <div className="sidebar-item">
          <MdOutlinePolicy className="sidebar-icon" />
          <Link to="/client/terms-conditions" className="sidebar-link">
            شروط واحكام
          </Link>
        </div>
        <div className="sidebar-item">
          <IoSettingsOutline className="sidebar-icon" />
          <Link to="/client/settings" className="sidebar-link">
            الاعدادات
          </Link>
        </div>
        <div className="sidebar-item">
          <RxExit className="sidebar-icon" />
          <Link to="/client/logout" className="sidebar-link">
            تسجيل الخروج
          </Link>
        </div>
      </section>
    </section>
  );
<<<<<<< HEAD
=======

function Sidebar() {
    return (
        <section className="sidebar-main">
            <h1 className="sidebar-header">QAIM - قيم</h1>

            <section className="sidebar-content">
                <div className="sidebar-item">
                    <a href="#" className="sidebar-link">
                        الرئيسية
                    </a>
                    <IoMdHome className="sidebar-icon" />
                </div>
                <div className="sidebar-item">
                    <a href="#" className="sidebar-link">
                        اضافة عقار
                    </a>
                    <MdGroups className="sidebar-icon" />
                </div>
                <div className="sidebar-item">
                    <a href="#" className="sidebar-link">
                        عروض
                    </a>
                    <BiSolidOffer className="sidebar-icon" />
                </div>
                <div className="sidebar-item">
                    <a href="#" className="sidebar-link">
                        طلبات
                    </a>
                    <SiCarrd className="sidebar-icon" />
                </div>
                <div className="sidebar-item">
                    <a href="#" className="sidebar-link">
                        المدفوعات
                    </a>
                    <MdOutlinePolicy className="sidebar-icon" />
                </div>
                <div className="sidebar-item">
                    <a href="#" className="sidebar-link">
                        شروط واحكام
                    </a>
                    <IoMdHome className="sidebar-icon" />
                </div>
                <div className="sidebar-item">
                    <a href="#" className="sidebar-link">
                        الاعدادات
                    </a>
                    <IoSettingsOutline className="sidebar-icon" />
                </div>
                <div className="sidebar-item">
                    <a href="#" className="sidebar-link">
                        تسجيل الخروج
                    </a>
                    <RxExit className="sidebar-icon" />
                </div>
                {/* Add more sidebar items here */}
            </section>
        </section>
    );
>>>>>>> 115565764da8a3716fc4320dcf2300ffac7c23ba
=======
>>>>>>> f8a1e6a3b8c820033d185e26e1d048af2edef77c
}

export default Sidebar;
