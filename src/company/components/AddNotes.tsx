import * as Yup from "yup";
import { useFormik } from "formik";
import Button from "../../main/Ui/Button.tsx";

interface AddNotesProps {
    heading?: string;
    btnText?: string;
    onClickHandler: (note: string | null) => void;
}

export default function AddNotes({
    heading,
    btnText,
    onClickHandler,
}: AddNotesProps) {
    const validationSchema = Yup.object({
        note: Yup.string(),
    });

    const formik = useFormik({
        initialValues: {
            note: "",
        },
        validationSchema,
        onSubmit: (values) => {
            onClickHandler(values.note);
            formik.resetForm();
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <h2 className="text-xl font-bold mb-2">{heading}</h2>
            <textarea
                name="note"
                value={formik.values.note}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="اكتب ملاحظاتك هنا"
                rows={6}
                className={`w-full pt-4 sm:px-4 px-0 border border-[#d1e8e249] rounded-xl mb-5 shadow-md focus:border-[#d1e8e2] outline-none`}
            ></textarea>
            <Button
                type="submit"
                className={`w-full block sm:text-2xl text-sm text-center font-bold rounded-lg mb-10 ${
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
