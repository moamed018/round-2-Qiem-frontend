import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "./Input";
import Button from "./Button";
import { TbMailOpened } from "react-icons/tb";
import { FaFax } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

export default function ContactUs() {
    const validationSchema = Yup.object({
        email: Yup.string().email("برجاء ادخل بريد الكتروني صحيح"),
        username: Yup.string()
            .min(6, "يجب ان لا يقل الاسم عن 6 احرف")
            .required("الاسم مطلوب"),
        phone: Yup.string()
            .matches(
                /^(?:\+?\d{1,3})[0-9]{7,11}$/,
                "رقم الهاتف يجب أن يكون بين 8 و 14 أرقام"
            )
            .required("رقم الهاتف مطلوب"),
        message: Yup.string(),
    });

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            phone: "",
            message: "",
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            if (Object.entries(values).find((v) => v[1] !== "")) {
                resetForm();
            }
        },
    });
    return (
        <div className="py-10 sm:px-20 px-4 flex md:flex-row flex-col-reverse md:gap-5 gap-10 bg-linear-to-l from-0% to-30% from-[#D1E8E2] to-transparent">
            <div className="md:w-1/2 w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093647!2d144.96305781531802!3d-37.81627974202159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce720!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sus!4v1707578000000!5m2!1sen!2sus"
                    loading="lazy"
                    className="w-full min-h-[300px] h-full"
                />
            </div>
            <div className="md:w-1/2 w-full md:text-end text-start pt-10 sm:ps-5 ps-0">
                <h2 className="text-6xl font-bold mb-7">
                    <span className="text-[#C29062]">هيا</span> نتواصل !
                </h2>
                <p className="text-sm font-bold mb-7">
                    يمكنك التواصل معنا من خلال ترك رساة واحد موظفي خدمة العملاء
                    سيتواصل معك لاحقَا
                </p>
                <form
                    className="w-full mx-auto mb-16"
                    onSubmit={formik.handleSubmit}
                >
                    <Input
                        placeholder={"الاسم"}
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                        name="username"
                        error={
                            formik.touched.username && formik.errors.username
                                ? formik.errors.username
                                : ""
                        }
                        className="!rounded-lg text-lg"
                    />
                    <Input
                        placeholder={"البريد الالكتروني"}
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        name="email"
                        error={
                            formik.touched.email && formik.errors.email
                                ? formik.errors.email
                                : ""
                        }
                        className="!rounded-lg text-lg"
                    />
                    <Input
                        placeholder={"رقم الهاتف"}
                        type="tel"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        name="phone"
                        error={
                            formik.touched.phone && formik.errors.phone
                                ? formik.errors.phone
                                : ""
                        }
                        className="!rounded-lg text-lg text-end"
                    />
                    <textarea
                        className={`w-full py-3 px-12 mb-5 mt-5
                        rounded-lg border-2 border-[#D1E8E280] focus:border-[#D1E8E2] focus:outline-0 text-lg`}
                        placeholder="رسالتك"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                        rows={5}
                        name="message"
                    />
                    <Button
                        type="submit"
                        className={`w-full block sm:text-2xl text-xl text-center font-bold rounded-none ${
                            !formik.isValid
                                ? "opacity-50 hover:cursor-not-allowed hover:!opacity-50"
                                : ""
                        }`}
                    >
                        ارسال
                    </Button>
                </form>
                <div className="flex md:justify-end justify-between sm:flex-row flex-col xl:gap-10 gap-6 mt-5 ">
                    <a
                        className="flex xl:flex-row flex-col-reverse gap-2 text-lg items-center hover:opacity-75 cursor-pointer"
                        href="mailto:info@marcc.com.au"
                    >
                        <div className="xl:text-end text-center">
                            <span className="text-[#C29062]">
                                البريد الإلكتروني
                            </span>
                            <br />
                            info@marcc.com.au
                        </div>
                        <div className="text-[#C29062] ">
                            <TbMailOpened className="w-[26px] h-[26px]" />
                        </div>
                    </a>

                    <a
                        className="flex xl:flex-row flex-col-reverse gap-2 text-lg items-center hover:opacity-75 cursor-pointer"
                        href="fax:0354321234"
                    >
                        <div className="xl:text-end text-center">
                            <span className="text-[#C29062]">فاكس</span>
                            <br />
                            03 5432 1234
                        </div>
                        <div className="text-[#C29062] ">
                            <FaFax className="w-[26px] h-[26px]" />
                        </div>
                    </a>

                    <a
                        className="flex xl:flex-row flex-col-reverse gap-2 text-lg items-center hover:opacity-75 cursor-pointer"
                        href="tel:0354321234"
                    >
                        <div className="xl:text-end text-center">
                            <span className="text-[#C29062]">الهاتف</span>
                            <br />
                            03 5432 1234
                        </div>
                        <div className="text-[#C29062] ">
                            <FaPhoneVolume className="w-[26px] h-[26px]" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
