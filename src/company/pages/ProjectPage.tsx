import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import UploadFile from "../components/UploadFile.tsx";
import ProjectDetails from "../components/ProjectDetails.tsx";
import Breadcrumb from "../components/Breadcrumb.tsx";
import AddNotes from "../components/AddNotes.tsx";
import ButtonAction from "../components/ButtonAction.tsx";

export default function ProjectPage() {
    const { id } = useParams();
    const [idNumber, setIdNumber] = useState<string>("");

    useEffect(() => {
        setIdNumber(id + "");
    }, [id]);

    const backPages = [
        {
            href: "/company/",
            text: "الرئيسية",
        },
        {
            href: "/company/projects/",
            text: "المشاريع",
        },
    ];

    return (
        <div className="py-10 lg:px-6 px-4">
            <Breadcrumb currentPage="تفاصيل" listOfPages={backPages} />

            <ProjectDetails id={idNumber} />

            <div className="lg:min-w-1/2 lg:w-fit min-w-full mx-auto">
                <AddNotes
                    heading="ملاحظات"
                    btnText="أضف ملاحظة"
                    onClickHandler={() => {}}
                />
            </div>

            <div className="lg:min-w-1/2 lg:w-fit min-w-full mx-auto grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-4 justify-between pt-4 sm:px-4 px-0 mb-10 ">
                <ButtonAction clickHandler={(e) => console.log(e)}>
                    اختيار فريق
                </ButtonAction>
                <ButtonAction clickHandler={(e) => console.log(e)}>
                    التعليقات
                </ButtonAction>
                <ButtonAction clickHandler={(e) => console.log(e)}>
                    تقارير الفريق
                </ButtonAction>
                <ButtonAction clickHandler={(e) => console.log(e)}>
                    كتابة التقييم
                </ButtonAction>
            </div>

            <div className="lg:min-w-1/2 lg:w-fit min-w-full mx-auto">
                <UploadFile
                    heading="الملف التعريفي للشركة / ملحقات"
                    btnText="انهاء المشروع"
                    onClickHandler={(file) => {
                        console.log(file);
                    }}
                />
            </div>
        </div>
    );
}
