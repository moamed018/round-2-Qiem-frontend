import LinkButton from "../Ui/LinkButton";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import { RiAccountCircleLine } from "react-icons/ri";

interface RegisterPageProps {
    title?: string;
    back?: string;
    children?: React.ReactNode;
}

export default function RegisterPage({
    title,
    back = "../",
    children,
}: RegisterPageProps) {
    return (
        <div className="flex md:flex-row flex-col">
            <LinkButton
                to={back}
                className="absolute left-5 top-3 font-bold text-md flex gap-2 items-center"
            >
                عودة
                <FaArrowLeftLong className="w-[20px] h-[20px]" />
            </LinkButton>

            <section className="md:w-6/10 w-full md:min-h-screen min-h-fit bg-[#D1E8E24D] md:py-6 py-12 px-6 shadow-[-5px_0px_26px_19px_#0000001A] flex flex-col justify-center items-center">
                <div className="w-[80px] h-[80px] mx-auto mb-6 bg-[#C29062] rounded-full flex justify-center items-center">
                    <RiAccountCircleLine className="w-8/10 h-8/10 text-white" />
                </div>
                <h2 className="text-[#C29062] text-5xl font-bold mb-10">
                    {title}
                </h2>

                {children}
            </section>

            <section className="md:w-4/10 w-full md:min-h-screen min-h-fit bg-linear-to-b from-[#D1E8E2ff] to-[#D1E8E200]   flex flex-col justify-center p-10 ps-16 gap-5 items-start">
                <h2 className="text-[#C29062] sm:text-6xl text-3xl font-bold ">
                    مرحباً بعودتك !
                </h2>
                <p className="sm:text-4xl text-2xl mb-2">
                    لتبقي علي تواصل معنا من فضلك قم بالتسجيل الأن.
                </p>
                <LinkButton
                    to="/login"
                    className="sm:w-4/8 w-full text-center sm:text-2xl ps-10 text-xl font-bold relative"
                    fullRounded
                >
                    <FaArrowRightLong className="w-[24px] h-[24px] absolute top-4 right-4" />
                    تسجيل الدخول
                </LinkButton>
            </section>
        </div>
    );
}
