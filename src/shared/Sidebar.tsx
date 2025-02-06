import "./style/Sidebar.css";
import { IoMdHome } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { RxExit } from "react-icons/rx";
// import { MdOutlinePayment } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { SiCarrd } from "react-icons/si";
import { MdOutlinePolicy } from "react-icons/md";
<<<<<<< HEAD
import "./style/Sidebar.css";

function Sidebar() {
  return (
    <section dir="rtl" className="sidebar-main">
      <h1 className="sidebar-header">قيم-QAIM</h1>

      <section className="sidebar-content">
        <div className="sidebar-item">
          <IoMdHome className="sidebar-icon" />
          <a href="#" className="sidebar-link">
            الرئيسية
          </a>
        </div>
        <div className="sidebar-item">
          <MdGroups className="sidebar-icon" />
          <a href="#" className="sidebar-link">
            اضافة عقار
          </a>
        </div>
        <div className="sidebar-item">
          <BiSolidOffer className="sidebar-icon" />
          <a href="#" className="sidebar-link">
            عروض
          </a>
        </div>
        <div className="sidebar-item">
          <SiCarrd className="sidebar-icon" />
          <a href="#" className="sidebar-link">
            طلبات
          </a>
        </div>
        <div className="sidebar-item">
          <MdOutlinePayment className="sidebar-icon" />
          <a href="#" className="sidebar-link">
            المدفوعات
          </a>
        </div>
        <div className="sidebar-item">
          <IoMdHome className="sidebar-icon" />
          <a href="#" className="sidebar-link">
            شروط واحكام
          </a>
        </div>
        <div className="sidebar-item">
          <IoSettingsOutline className="sidebar-icon" />
          <a href="#" className="sidebar-link">
            الاعدادات
          </a>
        </div>
        <div className="sidebar-item">
          <RxExit className="sidebar-icon" />
          <a href="#" className="sidebar-link">
            تسجيل الخروج
          </a>
        </div>
        {/* Add more sidebar items here */}
      </section>
    </section>
  );
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
}

export default Sidebar;
