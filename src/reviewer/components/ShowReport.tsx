
import React from "react";
import ButtonCard from "../../company/components/ButtonCard";

interface ReportData {
    propertyCode: string;
    evaluationDate: string;
    generalDescription: string;
    locationDescription: string;
    ownerNumber: string;
    date: string;
    propertyType: string;
    structuralIntegrity: boolean;
    services: string[];
    propertyAge: string;
    usageStatus: string;
    contactNumber: string;
    plotNumber: string;
    source: string;
    landType: string;
    area: string;
    boundaries: {
        north: string;
        northLength: string,
        south: string,
        southLength: string,
        east: string,
        eastLength: string,
        west: string,
        westLength: string,
    };
    range: string;
    planningStatus: string;
    floors: number;
    landValue: string;
    images: string[];
    fileUrl?: string;
}

interface ReportProps {
    report: ReportData;
    role: string; 
}

const ShowReport: React.FC<ReportProps> = ({ report, role }) => {

    const handleAccept = () => {
        console.log("Accepted");
    };
    const handleDecline = () => {
        console.log("Decline");
    };
    
    return (
        <div>
            <div className="text-right">
                <h2 className="font-semibold mp-2">كود العقار</h2>
                <p className="text-[#C29062] mp-2">{report.propertyCode}</p>
                <h2 className="font-semibold  mb-2">تاريخ التقييم</h2>
                <p className="text-[#C29062] mb-2"> {report.evaluationDate}</p>
                <h2 className=" font-semibold mb-2 ">وصف عام</h2>
                <p className="text-[#C29062] mb-2" >{report.generalDescription}</p>
                <h2 className="font-semibold mb-2 ">وصف الموقع</h2>
                <p className="text-[#C29062] mb-2" >{report.locationDescription}</p>
                <h2 className="font-semibold mb-2">رقم المالك</h2>
                <p className="text-[#C29062] mb-2"> {report.ownerNumber}</p>
                <h2 className="font-semibold mb-2">تاريخ</h2>
                <p className="text-[#C29062] mb-2"> {report.date}</p>
                <h2 className="font-semibold mb-2">نوع العقار</h2>
                <p className="text-[#C29062] mb-2">{report.propertyType}</p>
                <h2 className="font-semibold mb-2">البنية التحتية</h2>
                <p className="text-[#C29062] mb-2"> {report.structuralIntegrity ? "نعم" : "لا"}</p>
                <h2 className="font-semibold mb-2">الخدمات</h2>
                <p className="text-[#C29062] mb-2"> {report.services.join(", ")}</p>
                <h2 className="font-semibold mb-2">عمر العقار</h2>
                <p className="text-[#C29062] mb-2"> {report.propertyAge}</p>
                <h2 className="font-semibold mb-2">حالة الاستخدام</h2>
                <p className="text-[#C29062] mb-2">{report.usageStatus}</p>
                <h2 className="font-semibold mb-2">رقم التواصل</h2>
                <p className="text-[#C29062] mb-2"> {report.contactNumber}</p>
                <h2 className="font-semibold mb-2">رقم القطعة</h2>
                <p className="text-[#C29062] mb-2"> {report.plotNumber}</p>
                <h2 className="font-semibold mb-2">المصدر</h2>
                <p className="text-[#C29062] mb-2"> {report.source}</p>
                <h2 className="font-semibold mb-2">نوع الأرض</h2>
                <p className="text-[#C29062] mb-2"> {report.landType}</p>
                <h2 className="font-semibold mb-2">المساحة</h2>
                <p className="text-[#C29062] mb-2"> {report.area} م²</p>
                <p className="font-semibold mb-2">حدود العقار</p>
                <div className=" mb-2 grid grid-cols-2 gap-4">
                    <div>
                        <h2 className="font-semibold mb-2">شمال</h2>
                        <p className="text-[#C29062] mb-2"> {report.boundaries.north} م</p>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-2">بطول</h2>
                        <p className="text-[#C29062] mb-2"> {report.boundaries.northLength} م</p>
                    </div>

                </div>
                <div className="grid grid-cols-2 gap-4 mb-2">
                    <div>
                        <h2 className="font-semibold mb-2">جنوب</h2>
                        <p className="text-[#C29062] mb-2"> {report.boundaries.south} م</p>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-2">بطول</h2>
                        <p className="text-[#C29062] mb-2"> {report.boundaries.southLength} م</p>
                    </div>

                </div>
                <div className="grid grid-cols-2 gap-4 mb-2">
                    <div>
                        <h2 className="font-semibold mb-2">شرق</h2>
                        <p className="text-[#C29062] mb-2">{report.boundaries.east} م</p>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-2">بطول</h2>
                        <p className="text-[#C29062] mb-2"> {report.boundaries.eastLength} م</p>
                    </div>

                </div>
                <div className="grid grid-cols-2 gap-4 mb-2">
                    <div>
                        <h2 className="font-semibold mb-2">غرب</h2>
                        <p className="text-[#C29062] mb-2"> {report.boundaries.west} م</p>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-2">بطول</h2>
                        <p className="text-[#C29062] mb-2"> {report.boundaries.westLength} م</p>
                    </div>
                </div>

                <h2 className="font-semibold mb-2">داخل النطاق  </h2>
                <p className="text-[#C29062] mb-2"> {report.range}</p>
                <h2 className="font-semibold mb-2">حالة المبني</h2>
                <p className="text-[#C29062] mb-2"> {report.planningStatus}</p>
                <h2 className="font-semibold mb-2">عدد الطوابق</h2>
                <p className="text-[#C29062] mb-2"> {report.floors}</p>
                <h2 className="font-semibold mb-2">تقييم الأرض</h2>
                <p className="text-[#C29062] mb-2"> {report.landValue} ريال</p>
            </div>
            <div className="mt-6">
                <h3 className="text-lg font-semibold">صور العقار</h3>
                <div className="grid grid-cols-3 gap-2 mt-2">
                    {report.images.map((img, index) => (
                        <img key={index} src={img} alt="Property" className="rounded-lg shadow-md" />
                    ))}
                </div>
            </div>
            {report.fileUrl && (
                <div className="mt-6 text-center">
                    <h3 className="text-lg font-semibold mb-2">الملف</h3>
                    <a
                        href={report.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-[#d1e8e24d] text-[#C29062] rounded-lg shadow-md hover:bg-[#d1e8e27d] transition"
                    >
                        <span className="mx-2 font-semibold">📄</span> عرض الملف
                    </a>
                </div>
            )}
            {role === "Drawer" && (
                <div className="flex justify-between mt-5">

                    <ButtonCard label="قبول" type="button" baseStyle="w-1/2 bg-[#396345] text-white py-2 me-2 rounded " onClick={handleAccept} />
                    <ButtonCard label="رفض" type="button" baseStyle="w-1/2 bg-[#ad5353] text-white py-2 ms-2 rounded" onClick={handleDecline} />

                </div>
            )}
            
        </div>
    );
};

export default ShowReport;
