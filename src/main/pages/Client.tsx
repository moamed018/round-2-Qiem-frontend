import RegisterPage from "./RegisterPage";

import { CiMail } from "react-icons/ci";
import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

import Input from "../Ui/Input";
import InputPassword from "../Ui/InputPassword";

import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../Ui/Button";
import { useNavigate } from "react-router";

export default function Client() {
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("برجاء ادخل بريد الكتروني صحيح")
            .required("هذا الحقل مطلوب"),
        password: Yup.string()
            .min(8, "يجب ان لا يقل الرقم السري عن 8 احرف")
            .required("هذا الحقل مطلوب"),
        passwordConfirm: Yup.string()
            .oneOf([Yup.ref("password")], "الرقم السري غير متطابق")
            .required("هذا الحقل مطلوب"),
        username: Yup.string()
            .min(8, "يجب ان لا يقل الاسم عن 8 احرف")
            .required("هذا الحقل مطلوب"),
        phone: Yup.string()
            .matches(
                /^(?:\+?\d{1,3})[0-9]{7,11}$/,
                "رقم الهاتف يجب أن يكون بين 8 و 14 أرقام"
            )
            .required("هذا الحقل مطلوب"),
        location: Yup.string(),
        agreeToTerms: Yup.bool()
            .oneOf([true], "يجب عليك الموافقة على الشروط والأحكام")
            .required("موافقتك على الشروط والأحكام مطلوبة"),
    });

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            phone: "",
            location: "",
            passwordConfirm: "",
            agreeToTerms: false,
        },
        validationSchema,
        onSubmit: (values) => {
            alert(
                "هذه تجربة لمهمة تسجيل حساب جديد اذا ضغطت علي حسنا سيتم نقلك الي الصفحة الرئيسية وهذه هي البيانات التي قمتَ بتسجيلها:\n" +
                    JSON.stringify(values, null, 2)
            );
            navigate("/");
        },
    });

    return (
        <RegisterPage title="إنشاء حساب جديد">
            <form
                className="sm:w-8/10 w-full sm:ms-4 ms-0 md:ps-6 ps-0 md:self-start self-auto"
                onSubmit={formik.handleSubmit}
            >
                <Input
                    icon={FaUserAlt}
                    placeholder="اسم المستخدم"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="username"
                    error={
                        formik.touched.username && formik.errors.username
                            ? formik.errors.username
                            : ""
                    }
                />

                <Input
                    icon={CiMail}
                    placeholder="البريد الالكتروني"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="email"
                    error={
                        formik.touched.email && formik.errors.email
                            ? formik.errors.email
                            : ""
                    }
                />

                <Input
                    icon={FaPhoneAlt}
                    placeholder="رقم الجوال"
                    type="tel"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="phone"
                    className="text-end"
                    error={
                        formik.touched.phone && formik.errors.phone
                            ? formik.errors.phone
                            : ""
                    }
                />

                <Input
                    icon={MdLocationPin}
                    placeholder="ادخل المدينة"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="location"
                    error={
                        formik.touched.location && formik.errors.location
                            ? formik.errors.location
                            : ""
                    }
                />

                <InputPassword
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="password"
                    error={
                        formik.touched.password && formik.errors.password
                            ? formik.errors.password
                            : ""
                    }
                />

                <InputPassword
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="passwordConfirm"
                    placeholder="تأكيد كلمة المرور"
                    error={
                        formik.touched.passwordConfirm &&
                        formik.errors.passwordConfirm
                            ? formik.errors.passwordConfirm
                            : ""
                    }
                />

                <label className="flex items-center font-bold text-lg">
                    <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formik.values.agreeToTerms}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="mx-2 w-[26px] h-[26px]"
                    />
                    قبول الشروط والأحكام
                </label>
                <p className="ps-4 text-sm text-red-600 mb-3">
                    {formik.errors.agreeToTerms}
                </p>

                <div className="my-3">
                    <Button
                        type="submit"
                        className={`w-full block sm:text-2xl text-xl text-center font-bold ${
                            !formik.isValid
                                ? "opacity-50 hover:cursor-not-allowed hover:!opacity-50"
                                : ""
                        }`}
                        fullRounded
                    >
                        إنشاء حساب جديد
                    </Button>
                </div>
            </form>
        </RegisterPage>
    );
}
