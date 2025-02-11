import { CiEdit } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { HomeCardProps } from "../types/types";

const HomeCard: React.FC<HomeCardProps> = ({
  cityName,
  propertyAddress,
  propertyDescription,
}) => {
  return (
    <div className="w-[380px] h-[490px] p-2 flex flex-col gap-7">
      <div className="flex flex-col w-fit">
        <img src="/src/assets/home-page-2.1.jpg" alt="home page card" />
      </div>
      <div className="flex flex-col gap-2">
        <h2>{cityName}</h2>
        <p>{propertyAddress}</p>
        <p>{propertyDescription}</p>
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          className="flex items-center gap-1"
          id="home-page-btn-edit"
        >
          <p>تعديل</p>
          <CiEdit className="w-6 h-6" />
        </button>
        <button
          type="button"
          className="flex items-center gap-1"
          id="home-page-btn-delete"
        >
          <p>حذف</p>
          <IoClose className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default HomeCard;
