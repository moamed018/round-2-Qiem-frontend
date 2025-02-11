import LinkButton from "./LinkButton";
import HeroBgImage from "../../assets/home_hero_bg.png";
import HeroImage from "../../assets/hero_group.png";
import { IoIosArrowForward } from "react-icons/io";
import Navbar from "./Navbar";

export default function Hero() {
    return (
        <div
            style={{ backgroundImage: `url(${HeroBgImage})` }}
            className="bg-cover bg-center bg-no-repeat min-h-screen"
        >
            <Navbar />

            <div className="flex items-end md:flex-row flex-col-reverse sm:px-10 px-4 py-20 md:gap-10 gap-5">
                <div className="md:w-1/2 w-full">
                    <img src={HeroImage} alt="Hero" />
                </div>
                <div className="md:w-1/2 w-full text-white pb-20">
                    <h2 className="text-6xl font-bold text-[#C29062] mb-6">
                        منصة قيم - QAIM
                    </h2>
                    <h3 className="text-4xl font-bold mb-6">
                        اكبر منصة بالشرق الاوسط لحلول إدارة الاملاك العقاري
                    </h3>
                    <p className="text-2xl mb-6 text-[#8B94C6]">
                        #تقنيات_عقارية تمكن المكاتب والشركات العقارية من اتمة
                        عمليات الشراء للوحدات والمرافق العقارية . تتوافق وترتبط
                        بالخدمات الحكومية ومزودة بأنظمة محاسبية ألية.
                    </p>
                    <LinkButton
                        to="/register"
                        className="text-xl px-10 font-bold w-fit flex items-center gap-2"
                    >
                        <IoIosArrowForward />
                        سجل الأن
                    </LinkButton>
                </div>
            </div>
        </div>
    );
}
