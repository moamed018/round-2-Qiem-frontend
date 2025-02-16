import * as Yup from "yup";
import { useFormik } from "formik";
import InputFile from "../../main/Ui/InputFile.tsx";
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from "../../main/Ui/Button.tsx";

interface UploadFileProps {
    heading: string;
    btnText: string;
    onClickHandler: (file: File | null) => void;
}

export default function UploadFile({
    heading,
    btnText,
    onClickHandler,
}: UploadFileProps) {
    const validationSchema = Yup.object({
        file: Yup.mixed()
            .required("يجب رفع ملف")
            .test("fileType", "يجب أن يكون الملف PDF", (value) => {
                return value && (value as File).type === "application/pdf";
            }),
    });

    const formik = useFormik({
        initialValues: {
            file: null,
        },
        validationSchema,
        onSubmit: (values) => {
            onClickHandler(values.file);
            formik.resetForm();
        },
    });

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        formik.setFieldValue("file", file);
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <h2 className="text-xl font-bold mb-2">{heading}</h2>
            <div className="flex lg:flex-row flex-col lg:gap-10 gap-4 items-center pt-4 sm:px-4 px-0 border border-[#D1E8E2] rounded-xl mb-10 shadow-md">
                <div className="text-[#C29062] flex flex-col items-center lg:gap-8 gap-4">
                    <h2 className="text-2xl font-bold ">تحميل ملف</h2>
                    <FaCloudUploadAlt className="text-7xl" />
                </div>
                <div className="lg:pt-10 pt-0 flex flex-col lg:items-start items-center gap-2">
                    <h2 className="sm:text-lg text-sm font-bold">
                        اختار ملف للتحميل من جهازك
                    </h2>
                    <InputFile
                        handleFileChange={handleFileChange}
                        file={formik.values.file}
                        error={
                            formik.touched.file && formik.errors.file
                                ? formik.errors.file
                                : ""
                        }
                        className={`px-16 py-1 lg:text-lg text-sm !w-fit lg:max-w-full max-w-3/4 mx-auto`}
                    />
                </div>
            </div>
            <Button
                type="submit"
                className={`w-full block sm:text-2xl text-sm text-center font-bold rounded-lg ${
                    !formik.isValid
                        ? "opacity-50 hover:cursor-not-allowed hover:!opacity-50"
                        : ""
                }`}
            >
                {btnText}
            </Button>
        </form>
    );
}
