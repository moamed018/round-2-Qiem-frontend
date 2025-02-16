import "../styles/ReviewerSidebar.css";
import { IoMdHome } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { RxExit } from "react-icons/rx";
import { MdOutlinePayment } from "react-icons/md";
import { SiCarrd } from "react-icons/si";
import { MdOutlinePolicy } from "react-icons/md";
import { LuWallet } from "react-icons/lu";
import { Link } from "react-router-dom";
function ReviewerSidebar() {
  return (
    <div className="w-2/9">
      <section dir="rtl" className="sidebar-main h-full  w-full max-sm:w-fit">
      <h1 className="sidebar-header">قيم-QAIM</h1>

      <section className="sidebar-content">
        <div className="sidebar-item">
          <IoMdHome className="sidebar-icon" />
          <Link to="show-all-property" className="sidebar-link">
            الرئيسية
          </Link>
        </div>
  
        <div className="sidebar-item">
          <SiCarrd className="sidebar-icon" />
          <Link to="show-request" className="sidebar-link">
            طلبات
          </Link>
          </div>
          
          <div className="sidebar-item">
          <LuWallet className="sidebar-icon" />
          <Link to="show-balance" className="sidebar-link">
            رصيدي
          </Link>
        </div>
        <div className="sidebar-item">
          <MdOutlinePayment className="sidebar-icon" />
          <Link to="paid-project" className="sidebar-link">
            المدفوعات
          </Link>
        </div>
        <div className="sidebar-item">
          <MdOutlinePolicy className="sidebar-icon" />
          <Link to="terms-conditions-reviewer" className="sidebar-link">
            شروط واحكام
          </Link>
        </div>
        <div className="sidebar-item">
          <IoSettingsOutline className="sidebar-icon" />
          <Link to="settings-reviewer" className="sidebar-link">
            الاعدادات
          </Link>
        </div>
        <div className="sidebar-item">
          <RxExit className="sidebar-icon" />
          <Link to="logout" className="sidebar-link">
            تسجيل الخروج
          </Link>
        </div>
      </section>
    </section>
      
    </div>
  )
}

export default ReviewerSidebar
