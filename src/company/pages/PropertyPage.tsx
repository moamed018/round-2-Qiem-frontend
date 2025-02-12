import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import UploadFile from "../components/UploadFile.tsx";
import ProjectDetails from "../components/ProjectDetails.tsx";
import Breadcrumb from "../components/Breadcrumb.tsx";
import AddNotes from "../components/AddNotes.tsx";

export default function PropertyPage() {
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
            href: "/company/properties/",
            text: "عقارات",
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

            <div className="lg:min-w-1/2 lg:w-fit min-w-full mx-auto">
                <UploadFile
                    heading="اضافة مسودة"
                    btnText="ارسال عرض تقييم"
                    onClickHandler={(file) => {
                        console.log(file);
                    }}
                />
            </div>
        </div>
    );
}
