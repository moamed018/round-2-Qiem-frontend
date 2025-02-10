import { CiEdit } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { HomeCardProps } from "../types/types";
import "../style/HomePage.css";
import HomePage from"/src/assets/home-page-2.1.jpg"

const HomeCard: React.FC<HomeCardProps> = ({
  cityName,
  propertyAddress,
  propertyDescription,
  onDelete,
  onEdit,
}) => {
  return (
    <div
      className="w-[380px] p-2 flex flex-col gap-7 h-[500px]"
      id="home-card-container"
    >
      <div className="flex flex-col w-fit">
        <img src={HomePage} alt="home page card" />
      </div>
      <div className="flex flex-col gap-2">
        <h2 id="home-card-header">{cityName}</h2>
        <p className="single-line-text">{propertyAddress}</p>
        <p className="single-line-text">{propertyDescription}</p>
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          className="flex items-center gap-1"
          id="home-page-btn-edit"
          onClick={onEdit}
        >
          <p>تعديل</p>
          <CiEdit className="w-6 h-6" />
        </button>
        <button
          type="button"
          className="flex items-center gap-1"
          id="home-page-btn-delete"
          onClick={onDelete}
        >
          <p>حذف</p>
          <IoClose className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default HomeCard;
