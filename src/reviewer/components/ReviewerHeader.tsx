import "../styles/ReviewerHeader.css";
import { IoNotificationsSharp } from "react-icons/io5";

import { IoIosSearch } from "react-icons/io";

function ReviewerHeader() {
  return (
    <section dir="ltr"  className="flex  justify-between px-10 h-[80px] items-center main-header">
      <h2 className="text-white dashboard-header">Dashboard</h2>

      {/* Search Bar Container */}
      <div className="flex items-center gap-3 px-5 rounded-full w-[441.14px] h-[60.87px] bg-white">
        <div className="">
          <IoIosSearch className="text-gray-500 text-2xl icon" />
        </div>

        {/* Input Field */}
        <input
          type="search"
          placeholder="Search"
          className="w-full outline-none bg-transparent  p input-search"
        />
      </div>

      {/* right bar */}
      <div className="flex items-center gap-8">
        {/* Notifications Icon*/}
        <div className="notifications-icon-container">
          <IoNotificationsSharp className=" notifications-icon" />
        </div>
        {/* Avatar */}
        <div className="flex gap-4  items-center">
          <h2 className="text-lg text-white username">Ahmed Mohamed</h2>
          <img
            className="w-[50px] h-[50px] rounded-full "
            src="/src/assets/avatar.png"
            alt="avatar"
          />
        </div>
      </div>
    </section>
  );
}

export default ReviewerHeader;
