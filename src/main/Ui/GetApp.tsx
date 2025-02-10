import { IoStar } from "react-icons/io5";
import PhoneImage from "../../assets/phone.png";
import Appstore from "../../assets/appstore.png";
import Playstore from "../../assets/playstore.png";

export default function GetApp() {
    return (
        <div className="relative lg:py-60 px-2 py-20 lg:mb-20 mb-4 rounded-b-4xl bg-linear-to-t from-[#CEAA87] to-30% to-[#D1E8E2] flex flex-col justify-center items-center">
            <h2 className="sm:text-4xl text-2xl font-bold">
                يمكنك تحميل تطبيق
                <span className="text-[#CEAA87]"> قيم - QAIM</span> الان !
            </h2>
            <div className="flex space-x-4 mt-10 mb-4">
                <IoStar className="sm:text-5xl text-2xl text-[#ffdb0d]" />
                <IoStar className="sm:text-5xl text-2xl text-[#ffdb0d]" />
                <IoStar className="sm:text-5xl text-2xl text-[#ffdb0d]" />
                <IoStar className="sm:text-5xl text-2xl text-[#ffdb0d]" />
                <IoStar className="sm:text-5xl text-2xl text-[#ffdb0d]" />
            </div>
            <p className="sm:text-4xl text-2xl">
                أكثر من 20,000 عملية تنزيل حتي الان
            </p>

            <div className="lg:absolute right-10 bottom-10 flex sm:flex-row flex-col gap-6 my-10">
                <a
                    href="#"
                    className="hover:scale-110 transform transition-all duration-300"
                >
                    <img src={Playstore} alt="Playstore" />
                </a>
                <a
                    href="#"
                    className="hover:scale-110 transform transition-all duration-300"
                >
                    <img src={Appstore} alt="Appstore" />
                </a>
            </div>

            <div className="lg:absolute bottom-[-140px] left-0 lg:w-3/10 sm:w-5/10 w-full lg:h-fit h-[600px] ">
                <img
                    src={PhoneImage}
                    alt="Phone image"
                    className="w-full h-full"
                />
            </div>
        </div>
    );
}
