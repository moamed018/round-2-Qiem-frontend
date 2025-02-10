import { CiEdit } from "react-icons/ci";
import { IoClose } from "react-icons/io5";


function HomeCard() {
  return (
    <div className="w-[380px] h-[490px]  p-2 flex flex-col gap-7" id="home-card-container">
      <div className="flex flex-col w-fit ">
        <img src="/src/assets/home-page-2.1.jpg" alt="home page card" />
      </div>
      <div className="flex flex-col gap-2">
        <h2 id="home-card-header">الرياض</h2>
        <p id="home-card-address">
          عقار في شارع السند ، حي النرجس ، الرياض ، منطقة الرياض
        </p>
        <p id="home-card-description">
          تتكون من صالة ومجلس وثلاث غرف نوم ومطبخ وثلاث دورات مياه وتراس  مطل
          على الشارع  بمساحة 138م...........
        </p>
      </div>
      <div id="home-page-btns" className="flex gap-3">
        <button id="home-page-btn">
          <p>تعديل</p>
          <CiEdit className="w-[30px] h-[30px] font-extrabold"/>
        </button>
        <button id="home-page-btn">
          <p>حذف</p>
          <IoClose className="w-[30px] h-[30px] font-extrabold"/>
        </button>
      </div>
    </div>
  );
}

export default HomeCard;
