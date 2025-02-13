import { useState, useEffect } from "react";
import data from "../../company/data";
import AddNotes from "../../company/components/AddNotes";
import UploadFile from "../../company/components/UploadFile";

const PropertyCardDetails: React.FC<{
    id?: string;
}> = ({ id }) => {
    const [project, setProject] = useState<{
        title: string;
        id: number;
        image: string;
        gallery: string[];
        price: string;
        priceType: string;
        description: {
            short: string;
            long: string;
            properties: string[];
        };
        info: {
            type: string;
            space: string;
            city: string;
            region: string;
        };
        evaluation: {
            company: string;
            email: string;
            price: string;
            priceType: string;
        };
    } | null>(null);

    useEffect(() => {
        const foundProject = data.find((e) => `${e.id}` === id);
        setProject(foundProject || null);
    }, [id]);

    return (
        <div className="rounded-sm shadow[0_15px_15px_0_rgba(0, 0, 0, 0.25)] w-full p-2 flex flex-col gap-4">
            <img
                src={project?.image}
                alt="Property request card"
                className="w-full h-[300px]"
            />
            <p className="line-clamp-3 font-bold text-md">
                {project?.description.long}
            </p>
            <div className="flex flex-col gap-4 text-md mb-4">
                <div>
                    <p className="text-[#C29062] font-bold">النوع</p>
                    <p className=""> {project?.info.type}</p>
                </div>

                <div>
                    <p className="text-[#C29062] font-bold">المساحة</p>
                    <p className=""> {project?.info.space}</p>
                </div>

                <div>
                    <p className="text-[#C29062] font-bold">المدينة</p>
                    <p className=""> {project?.info.city}</p>
                </div>

                <div>
                    <p className="text-[#C29062] font-bold">المنطقة</p>
                    <p className=""> {project?.info.region}</p>
                </div>

                <div>
                    <p className="text-[#C29062] font-bold">شركة التقييم</p>
                    <p className=""> {project?.evaluation.company}</p>
                </div>

                <div>
                    <p className="text-[#C29062] font-bold">
                        البريد الإلكتروني
                    </p>
                    <a
                        href={`mailto:${project?.evaluation.email}`}
                        className="text-blue-600"
                    >
                        {project?.evaluation.email}
                    </a>
                </div>

                <div>
                    <p className="text-[#C29062] font-bold">تكلفة التقييم</p>
                    <p className="">
                        {" "}
                        {project?.evaluation.price}{" "}
                        {project?.evaluation.priceType}
                    </p>
                </div>
            </div>

            <AddNotes
                heading="ملاحظات"
                btnText="أضف ملاحظة"
                onClickHandler={() => {}}
            />

            <UploadFile
                heading="ارسال ملف"
                btnText="ارسال ملف"
                onClickHandler={(file) => {
                    console.log(file);
                }}
            />
        </div>
    );
};

export default PropertyCardDetails;
