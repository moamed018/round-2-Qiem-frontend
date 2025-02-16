import SettingsPage from "../../shared/SettingsPage";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../main/Ui/Input";
import { FaCheck, FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import SelectMenu from "../../main/Ui/SelectMenu";
import { MdLocationPin } from "react-icons/md";
import Button from "../../main/Ui/Button";
import { useState } from "react";
import Modal from "../../shared/Modal";

interface Option {
    value: string;
    label: string;
}

const options: Option[] = [
    { value: "cairo", label: "القاهرة" },
    { value: "alexandria", label: "الإسكندرية" },
    { value: "giza", label: "الجيزة" },
    { value: "luxor", label: "الأقصر" },
    { value: "aswan", label: "أسوان" },
];

export default function SettingsReviewer() {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [modalMessage, setModalMessage] = useState<string>("");

    const placeholderData = {
        username: "شركة عقاركم",
        email: "companyi@yahoo.com",
        phone: "+966 50 569 1238",
        city: options[0],
    };

    const validationSchema = Yup.object({
        email: Yup.string().email("برجاء ادخل بريد الكتروني صحيح"),
        username: Yup.string().min(6, "يجب ان لا يقل الاسم عن 6 احرف"),
        phone: Yup.string().matches(
            /^(?:\+?\d{1,3})[0-9]{7,11}$/,
            "رقم الهاتف يجب أن يكون بين 8 و 14 أرقام"
        ),
        city: Yup.string(),
    });

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            phone: "",
            city: "",
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            if (Object.entries(values).find((v) => v[1] !== "")) {
                setOpenModal(true);
                setModalMessage(
                    `تم تعديل البيانات بنجاح ولاغراض تجريبية فقط هذه البيانات التي قمتَ بتغييرها ${
                        values["username"] &&
                        "(اسم الشركة: " + values["username"] + ")"
                    } ${
                        values["email"] &&
                        "(البريد الالكتروني: " + values["email"] + ")"
                    } ${
                        values["phone"] &&
                        "(رقم الجوال: " + values["phone"] + ")"
                    } ${values["city"] && "(المدينة: " + values["city"] + ")"}`
                );
                resetForm();
            }
        },
    });
    return (
        <SettingsPage >
            <div className="w-full">
                <form
                className="w-full lg:w-2/4  mx-auto"
                onSubmit={formik.handleSubmit}
            >
                <div className="mb-6">
                    <label
                        htmlFor="current"
                        className="block ps-2 text-lg font-semibold mb-2"
                    >
                        اسم الشركة
                    </label>
                    <Input
                        icon={FaUserAlt}
                        placeholder={placeholderData.username}
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
                        className="!rounded-xl"
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="current"
                        className="block ps-2 text-lg font-semibold mb-2"
                    >
                        البريد الألكتروني
                    </label>
                    <Input
                        icon={CiMail}
                        placeholder={placeholderData.email}
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
                        className="!rounded-xl"
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="current"
                        className="block ps-2 text-lg font-semibold mb-2"
                    >
                        رقم الجوال
                    </label>
                    <Input
                        icon={FaPhoneAlt}
                        placeholder={placeholderData.phone}
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
                        className="!rounded-xl text-end"
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="current"
                        className="block ps-2 text-lg font-semibold mb-2"
                    >
                        اختر المدينة
                    </label>
                    <SelectMenu
                        icon={MdLocationPin}
                        title={placeholderData.city.label}
                        options={options}
                        value={formik.values.city}
                        onChange={(value) =>
                            formik.setFieldValue("city", value)
                        }
                        onBlur={() => formik.setFieldTouched("city", true)}
                        error={
                            formik.touched.city && formik.errors.city
                                ? formik.errors.city
                                : ""
                        }
                        className="!rounded-xl"
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
        </SettingsPage>
    );
}
