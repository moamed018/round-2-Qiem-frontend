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
    <section dir="rtl" className="sidebar-main ">
      <h1 className="sidebar-header">قيم-QAIM</h1>

      <section className="sidebar-content">
        <div className="sidebar-item">
          <IoMdHome className="sidebar-icon" />
          <Link to="/client/home" className="sidebar-link">
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
}

export default Sidebar;
