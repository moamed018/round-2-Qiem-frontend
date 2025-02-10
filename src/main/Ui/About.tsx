import React from "react";
import { TbUserCheck } from "react-icons/tb";
import { IoLocationSharp } from "react-icons/io5";
import { MdMessage } from "react-icons/md";

export default function About() {
    return (
        <div className="py-30 sm:px-10 px-2 bg-[#D1E8E24D]">
            <h2 className="text-center text-4xl font-bold mb-4">
                ما هي منصة <span className="text-[#C29062]"> قـيم - QAIM</span>{" "}
                ؟
            </h2>
            <p className="text-[#C29062] text-lg text-center md:max-w-7/10 w-full mx-auto mb-24">
                نتيح لطالبي خدمة التقييم من الوصول الي جميع شركات التقييم
                الموجودة في منطقته بالإضافة الي تقدم الشركات او مكاتب التقييم
                عرض السعر لتنفيذ هذه الخدمة وبالتالي يتيح لكم اختيار افضل سعر
                واكثر كفاءة.
            </p>

            <div className="flex flex-wrap gap-10 justify-evenly">
                <AboutCard
                    Icon={TbUserCheck}
                    title="انجاز العمل بدقه"
                    description="يمكن ايضا اشتراك المعاينين العقارين المعتمدين حسب المتطلبات المهنية المتبعة في ذلك دوليًا ولدى الهيئة السعودية وبذلك تكتمل منظومة التقييم"
                />

                <AboutCard
                    Icon={IoLocationSharp}
                    title="سهولة الوصول"
                    description="سهولة الوصول الي جميع شركات التقييم الموجودة في منطقته بالإضافة الي"
                />

                <AboutCard
                    Icon={MdMessage}
                    title="سهولة التواصل"
                    description="يتيح التطبيق للشركات او المكاتب العقارية التواصل بين اعضاء الفريق لسرعة انجاز العمل."
                />
            </div>
        </div>
    );
}

export function AboutCard({
    Icon,
    title,
    description,
}: {
    Icon: React.ComponentType<{
        className?: string;
    }>;
    title: string;
    description: string;
}) {
    return (
        <div className="group flex flex-col items-center mb-10 sm:w-90 w-80 mx-auto bg-[#D1E8E2] pt-16 pb-26 rounded-full hover:bg-linear-to-t hover:from-[#000] hover:to-[#C29062] shadow-2xl">
            <div className="bg-white sm:w-[280px] sm:h-[280px] w-[200px] h-[200px] rounded-full flex items-center justify-center shadow-2xl mb-10">
                <Icon className="text-[#D1E8E2] w-[80px] h-[80px] transition-all duration-200 group-hover:text-[#C29062]" />
            </div>
            <h3 className="text-4xl text-gray-700 font-bold mb-4 transition-all duration-200 group-hover:text-[#C29062] px-2">
                {title}
            </h3>
            <p className="text-lg px-6 text-center group-hover:text-white transition-all duration-200 ">
                {description}
            </p>
        </div>
    );
}
