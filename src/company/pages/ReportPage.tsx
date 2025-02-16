import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import ReportComponent from "../../reviewer/components/ShowReport";
import GalleryImage1 from "../../assets/company/gallery1.png"
import Breadcrumb from "../components/Breadcrumb";
import ButtonCard from "../components/ButtonCard";

const ReportPage = () => {
    const { projectId, memberId } = useParams();
    const [searchParams] = useSearchParams();
    const role = searchParams.get("role");
    const navigate = useNavigate();

    const backPages = [
        {
            href: "/company/",
            text: "الرئيسية",
        },
        {
            href: "/company/projects/",
            text: "المشاريع",
        },
        {
            href: "/company/projects/${projectId}",
            text: "التفاصيل",
        },
        {
            href: "/company/projects/${projectId}/team-reports/${memberId}",
            text: "تقارير الفريق",
        },
    ];
    

    if (!projectId || !memberId || !role) {
        return <p className="text-center text-red-500">بيانات التقرير غير متوفرة.</p>;
    }
    const handleEdit = () => {
        navigate(`/company/projects/${projectId}/team-reports/${memberId}/edit?role=${role}`);
    };
    const reportData = { 
        propertyCode: "12345",
        evaluationDate: "2024-02-15",
        generalDescription: "وصف عام للعقار",
        locationDescription: "وصف الموقع",
        ownerNumber: "0551234567",
        date: "2024-02-15",
        propertyType: "فيلا",
        structuralIntegrity: true,
        services: ["كهرباء", "ماء", "اتصالات"],
        propertyAge: "10 سنوات",
        usageStatus: "مسكون",
        contactNumber: "0551234567",
        plotNumber: "100",
        source: "المكتب العقاري",
        landType: "سكني",
        area: "400",
        boundaries: {
            north: "20",
            northLength: "20",
            south: "30",
            southLength: "30",
            east: "15",
            eastLength: "15",
            west: "25",
            westLength: "25",
        },
        range: "مخطط ١",
        planningStatus: "مخطط معتمد",
        floors: 2,
        landValue: "1,500,000 ريال",
        images: [GalleryImage1, GalleryImage1],
        fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" // Sample PDF
    };
    
    return <>
    <div className="m-5">
    <Breadcrumb currentPage="تقرير التقييم" listOfPages={backPages} />
    </div>
        <h1 className="text-center font-semibold my-5">تقرير التقييم</h1>
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl mx-auto my-8">

        <ReportComponent report={reportData} role={role} />
        <ButtonCard label={"تعديل"} onClick={handleEdit}        
        baseStyle="px-4 py-2 bg-gradient-to-r  from-[#C29062] to-[#000000E5] rounded-md text-white font-semibold transition duration-300   hover:bg-[#C29058] w-1/4 cursor-pointer"
        />

                
        </div>
    </>;
};

export default ReportPage;
