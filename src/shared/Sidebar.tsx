import "./style/Sidebar.css";
import { IoMdHome } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { RxExit } from "react-icons/rx";
import { MdOutlinePayment } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { SiCarrd } from "react-icons/si";
import { MdOutlinePolicy } from "react-icons/md";
import { Link } from "react-router-dom";


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
          <Link to="/terms-and-conditions" className="sidebar-link">
            شروط واحكام
          </Link>
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
}

export default Sidebar;
