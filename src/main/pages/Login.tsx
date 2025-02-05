import LinkButton from "../Ui/LinkButton";
import LoginImage from "../../assets/auth/login.png";
import { CiMail } from "react-icons/ci";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Input from "../Ui/Input";
import InputPassword from "../Ui/InputPassword";

import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../Ui/Button";
import { Link, useNavigate } from "react-router";

export default function Login() {
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("برجاء ادخل بريد الكتروني صحيح")
            .required("هذا الحقل مطلوب"),
        password: Yup.string().required("هذا الحقل مطلوب"),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: (values) => {
            alert(
                "هذه تجربة لمهمة تسجيل الدخول اذا ضغطت علي حسنا سيتم نقلك الي الصفحة الرئيسية وهذه هي البيانات التي قمتَ بتسجيلها:\n" +
                    JSON.stringify(values, null, 2)
            );
            navigate("/");
        },
    });

    return (
        <div className="flex md:flex-row flex-col">
            <LinkButton
                to="/"
                className="absolute left-5 top-3 font-bold text-md flex gap-2 items-center"
            >
                عودة
                <FaArrowLeftLong className="w-[20px] h-[20px]" />
            </LinkButton>

            <section className="md:w-3/7 w-full md:min-h-screen min-h-fit bg-[#D1E8E24D] md:py-6 py-12 px-6 shadow-[-5px_0px_26px_19px_#0000001A] flex flex-col justify-center">
                <div className="sm:w-2/4 w-7/10 mx-auto mb-3">
                    <img src={LoginImage} alt="login" className="w-full" />
                </div>
                <h2 className="text-[#C29062] sm:text-6xl text-4xl font-bold mb-3">
                    اهلاً بك!
                </h2>
                <p className="sm:text-4xl text-2xl mb-4">
                    مرحباً بعودتك مجدداً
                </p>

                <form
                    className="sm:w-8/10 w-full sm:ms-4 ms-0"
                    onSubmit={formik.handleSubmit}
                >
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
                    <div className="my-3">
                        <Button
                            type="submit"
                            className="w-full block sm:text-2xl text-xl text-center font-bold"
                            fullRounded
                        >
                            تسجيل الدخول
                        </Button>
                    </div>

                    <Link
                        to="/forgot-password"
                        className="text-black sm:text-xl text-lg font-bold block text-center"
                    >
                        هل نسيت كلمة المرور ؟
                    </Link>
                </form>
            </section>

            <section className="md:w-4/7 w-full md:min-h-screen min-h-fit bg-linear-to-b from-[#D1E8E2ff] to-[#D1E8E200]   flex flex-col justify-center p-10 gap-5 items-start">
                <h2 className="text-[#C29062] sm:text-6xl text-3xl font-bold ">
                    ليس لديك حساب!
                </h2>
                <p className="sm:text-4xl text-2xl mb-2">
                    يمكنك تسجيل بياناتك وانشاء حساب الأن
                </p>
                <LinkButton
                    to="/register"
                    className="sm:w-3/7 w-full text-center sm:text-2xl text-xl font-bold relative"
                    fullRounded
                >
                    <FaArrowRightLong className="w-[24px] h-[24px] absolute top-4 right-6" />
                    تسجــيــل
                </LinkButton>
            </section>
        </div>
    );
}
