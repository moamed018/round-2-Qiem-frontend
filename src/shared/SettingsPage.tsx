import { RiAccountCircleLine } from "react-icons/ri";
import { FaCheck, FaPen } from "react-icons/fa";

import { useState } from "react";
import InputPassword from "../main/Ui/InputPassword";
import Button from "../main/Ui/Button";

import { useFormik } from "formik";
import * as Yup from "yup";
import ErrorAlert from "../main/Ui/ErrorAlert";
import Modal from "./Modal";

export default function SettingsPage({
    children,
}: {
    children?: React.ReactNode;
}) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [error, setError] = useState("");
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [modalMessage, setModalMessage] = useState<string>("");

    const toggleTap = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const validationSchema = Yup.object({
        oldPassword: Yup.string().required("هذا الحقل مطلوب"),
        password: Yup.string()
            .min(8, "يجب ان لا يقل الرقم السري عن 8 احرف")
            .required("هذا الحقل مطلوب"),
        passwordConfirm: Yup.string()
            .oneOf([Yup.ref("password")], "الرقم السري غير متطابق")
            .required("هذا الحقل مطلوب"),
    });

    const formik = useFormik({
        initialValues: {
            oldPassword: "",
            password: "",
            passwordConfirm: "",
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            if (values.oldPassword === "12345678") {
                setError("");
                setOpenModal(true);
                setModalMessage(
                    ` تم تعديل كلمة المرور بنجاح ولاغراض تجريبية فقط هذه البيانات التي قمتَ بتسجيلها (كلمة السر القديمة: ${values.oldPassword}) (كلمة السر الجديدة: ${values.password})`
                );
                resetForm();
            } else {
                setError("كلمة المرور الحالية غير صحيحة");
            }
        },
    });

    return (
        // <main className="flex">
        <div className="grow flex flex-col">
            <div className="w-[80px] h-[80px] mx-auto my-8 bg-[#C29062] rounded-full flex justify-center items-center">
                <RiAccountCircleLine className="w-8/10 h-8/10 text-white " />
            </div>
            <h2 className="text-[#C29062] text-3xl font-bold text-center mb-4">
                إدارة الملف الشخصي
            </h2>
            {children && (
                <div
                    className={`w-full shadow-sm flex flex-col ${
                        activeIndex === 0 && "grow"
                    }`}
                >
                    <button
                        className={`w-full py-8 sm:px-8 px-3 text-start font-semibold sm:text-2xl text-xl bg-[#D1E8E24D] border-y border-[#8B94C6] cursor-pointer hover:bg-[#D1E8E290] transition flex justify-between items-center ${
                            activeIndex === 0 &&
                            "bg-linear-to-l from-[#000000] to-[#C29062] text-white sm:pe-15"
                        }`}
                        onClick={() => toggleTap(0)}
                    >
                        <span>تعديل معلومات الملف الشخصي</span>
                        <FaPen
                            className={`sm:w-[40px] sm:h-[40px] w-[30px] h-[30px] text-[#C29062] border-b-2 pb-1.5 border-b-[#C29062] transition ${
                                activeIndex === 0 && "text-white border-b-white"
                            }`}
                        />
                    </button>
                    {activeIndex === 0 && (
                        <div className="py-4 sm:px-4 px-1 text-gray-700 border-t grow">
                            <div className="border-2 border-[#D1E8E2] shadow-[0px_0px_10px_0px_#0000001A] px-4 py-8 rounded-md my-4 lg:mx-12 mx-1">
                                {children}
                            </div>
                        </div>
                    )}
                </div>
            )}

            <div
                className={`w-full shadow-sm flex flex-col ${
                    activeIndex === 1 && "grow"
                }`}
            >
                <button
                    className={`w-full py-8 sm:px-8 px-3 text-start font-semibold sm:text-2xl text-xl bg-[#D1E8E24D] border-y border-[#8B94C6] cursor-pointer hover:bg-[#D1E8E290] transition flex justify-between items-center ${
                        activeIndex === 1 &&
                        "bg-linear-to-l from-[#000000] to-[#C29062] text-white sm:pe-15"
                    }`}
                    onClick={() => {
                        toggleTap(1);
                    }}
                >
                    <span>تعديل كلمة المرور</span>
                    <FaPen
                        className={`sm:w-[40px] sm:h-[40px] w-[30px] h-[30px] text-[#C29062] border-b-2 pb-1.5 border-b-[#C29062] transition ${
                            activeIndex === 1 && "text-white border-b-white"
                        }`}
                    />
                </button>
                {activeIndex === 1 && (
                    <div className="py-4 sm:px-4 px-1 text-gray-700 border-t grow">
                        <div className="border-2 border-[#D1E8E2] shadow-[0px_0px_10px_0px_#0000001A] px-4 py-8 rounded-md my-4 lg:mx-12 mx-1">
                            {error && <ErrorAlert message={error} />}
                            <form
                                className="lg:w-2/4 w-full mx-auto"
                                onSubmit={formik.handleSubmit}
                            >
                                <div className="mb-6">
                                    <label
                                        htmlFor="current"
                                        className="block ps-2 text-lg font-semibold mb-2"
                                    >
                                        كلمة المرور الحالية
                                    </label>

                                    {/*//! Development Only */}
                                    <p className="mb-2 text-blue-900">
                                        لاغراض التجربة والتطوير فقط ادخل كلمة
                                        السر الحالية: <b>12345678</b>
                                    </p>

                                    <InputPassword
                                        id="current"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        name="oldPassword"
                                        placeholder="كلمة المرور الحالية"
                                        value={formik.values.oldPassword}
                                        error={
                                            formik.touched.oldPassword &&
                                            formik.errors.oldPassword
                                                ? formik.errors.oldPassword
                                                : ""
                                        }
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="new"
                                        className="block ps-2 text-lg font-semibold mb-2"
                                    >
                                        كلمة المرور الجديدة
                                    </label>
                                    <InputPassword
                                        id="new"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        name="password"
                                        value={formik.values.password}
                                        placeholder="كلمة المرور الجديدة"
                                        error={
                                            formik.touched.password &&
                                            formik.errors.password
                                                ? formik.errors.password
                                                : ""
                                        }
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="new_confirm"
                                        className="block ps-2 text-lg font-semibold mb-2"
                                    >
                                        تاكيد كلمة المرور الجديدة
                                    </label>
                                    <InputPassword
                                        id="new_confirm"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        name="passwordConfirm"
                                        value={formik.values.passwordConfirm}
                                        placeholder="تأكيد كلمة المرور الجديدة"
                                        error={
                                            formik.touched.passwordConfirm &&
                                            formik.errors.passwordConfirm
                                                ? formik.errors.passwordConfirm
                                                : ""
                                        }
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className={`w-full block sm:text-2xl text-xl text-center font-bold ${
                                        !formik.isValid
                                            ? "opacity-50 hover:cursor-not-allowed hover:!opacity-50"
                                            : ""
                                    }`}
                                    fullRounded
                                >
                                    تعديل
                                </Button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
            <Modal
                isOpen={openModal === true}
                Icon={FaCheck}
                onClose={() => {
                    console.log("closed modal");
                    setOpenModal(false);
                }}
                title="تاكيد"
                description={modalMessage}
                type="info"
                actions={
                    <>
                        <Button
                            onClick={() => {
                                setOpenModal(false);
                            }}
                            className="px-12 rounded-md text-xl font-bold bg-green-800 "
                        >
                            حسنا
                        </Button>
                    </>
                }
            />
        </div>
    );
}
