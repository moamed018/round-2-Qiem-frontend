
import ReportForm from "../../reviewer/components/ReportForm";

const EditReportPage = () => {
    
    return (
        <div className="m-5 p-5 border rounded-md">
            <h1 className="text-center font-semibold mb-5">تعديل التقرير</h1>
            <ReportForm mode={"reviewer"}/>
        </div>
    );
};

export default EditReportPage;
