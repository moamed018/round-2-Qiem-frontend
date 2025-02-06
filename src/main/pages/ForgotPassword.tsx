import LinkButton from "../Ui/LinkButton";
import LoginImage from "../../assets/auth/login.png";
import { CiMail } from "react-icons/ci";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Input from "../Ui/Input";
import { useRef, useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../Ui/Button";
import InputPassword from "../Ui/InputPassword";
import { useNavigate } from "react-router";
import ErrorAlert from "../Ui/ErrorAlert";

import { FaCheck } from "react-icons/fa";
import Modal from "../../shared/Modal";

const EmailStep = ({ onNext }: { onNext: (email: string) => void }) => {
    const formik = useFormik({
        initialValues: { email: "" },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("برجاء ادخل بريد الكتروني صحيح")
                .required("هذا الحقل مطلوب"),
        }),
        onSubmit: (values) => onNext(values.email),
    });

    return (
        <form
            onSubmit={formik.handleSubmit}
            className="sm:w-8/10 w-full mx-auto mt-4"
        >
            {/*//! Development Only */}
            <p className="mb-2 text-blue-900">
                لاغراض التجربة والتطوير فقط ادخل البريد التالي:{" "}
                <b>tech@cell.com</b>
            </p>

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

            <div className="my-3">
                <Button
                    type="submit"
                    className="w-full block sm:text-2xl text-xl text-center font-bold"
                    fullRounded
                >
                    استعادة كلمة المرور
                </Button>
            </div>
        </form>
    );
};

const OtpStep = ({ onNext }: { onNext: (otp: string) => void }) => {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const [ind, setInd] = useState(0);

    const formik = useFormik({
        initialValues: { otp: new Array(6).fill("") },
        validationSchema: Yup.object({
            otp: Yup.array()
                .of(
                    Yup.string()
                        .matches(/^[0-9]$/, "يجب إدخال رقم صحيح")
                        .required("مطلوب")
                )
                .length(6, "يجب إدخال 6 أرقام كاملة"),
        }),
        onSubmit: (values) => onNext(values.otp.join("")),
        validateOnBlur: false,
        validateOnChange: false,
    });

    const handleChange = (value: string, index: number) => {
        if (/[^0-9]/.test(value)) return;

        const newOtp = [...formik.values.otp];
        newOtp[index] = value;
        setInd(index);
        formik.setFieldValue("otp", newOtp);

        if (value && index < 5) {
            setInd(index + 1);
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        if (e.key === "Backspace") {
            const newOtp = [...formik.values.otp];
            if (newOtp[index]) {
                newOtp[index] = "";
                setInd(index);
                formik.setFieldValue("otp", newOtp);
            } else if (index > 0) {
                inputRefs.current[index - 1]?.focus();
                setInd(index - 1);
                newOtp[index - 1] = "";
                formik.setFieldValue("otp", newOtp);
            }
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        const pasteData = e.clipboardData
            .getData("Text")
            .replace(/[^0-9]/g, "")
            .slice(0, 6);
        const newOtp = [...formik.values.otp];
        for (let i = 0; i < pasteData.length; i++) {
            setInd(i);
            newOtp[i] = pasteData[i];
        }
        formik.setFieldValue("otp", newOtp);
        const nextIndex = pasteData.length < 6 ? pasteData.length : 5;
        inputRefs.current[nextIndex]?.focus();
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // formik.setTouched({ otp: formik.values.otp.map(() => true) });
        formik.handleSubmit();
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4"
        >
            {/*//! Development Only */}
            <p className="mb-2 text-blue-900 self-start">
                لاغراض التجربة والتطوير فقط ادخل الكود التالي:{" "}
                <b>0 0 0 0 0 0</b>
            </p>

            <label htmlFor={`id-${ind}`} className="self-start text-lg ps-2">
                ادخل الكود الذي تم ارساله الي بريدك الالكتروني:
            </label>
            <div className="flex gap-2 flex-row-reverse justify-center">
                {formik.values.otp.map((value, index) => (
                    <input
                        key={index}
                        id={`id-${index}`}
                        type="text"
                        maxLength={1}
                        value={value}
                        onChange={(e) => handleChange(e.target.value, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        onPaste={handlePaste}
                        ref={(el) => (inputRefs.current[index] = el)}
                        className={`w-12 h-12 text-center border rounded-md text-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            ind === index
                                ? "ring-2 ring-blue-500 "
                                : "opacity-30 pointer-events-none ring-2 ring-blue-300 "
                        } ${
                            formik.errors.otp && formik.errors.otp[index]
                                ? "border-red-500"
                                : "border-gray-300"
                        }`}
                        autoFocus={index === 0}
                        tabIndex={-1}
                    />
                ))}
            </div>
            {formik.errors.otp && (
                <div className="text-red-500 text-sm self-start ps-10">
                    {formik.errors.otp
                        .toString()
                        .split(",")
                        .map((err: string, i: number) =>
                            err !== "" ? (
                                <p key={i}>
                                    الحقل رقم ({i + 1}) {err}
                                </p>
                            ) : (
                                ""
                            )
                        )}
                </div>
            )}
            <Button type="submit">تأكيد</Button>
        </form>
    );
};

const PasswordStep = ({
    onSubmit,
}: {
    onSubmit: (password: string) => void;
}) => {
    const formik = useFormik({
        initialValues: { password: "", passwordConfirm: "" },
        validationSchema: Yup.object({
            password: Yup.string()
                .min(8, "يجب ان لا يقل الرقم السري عن 8 احرف")
                .required("هذا الحقل مطلوب"),
            passwordConfirm: Yup.string()
                .oneOf([Yup.ref("password")], "الرقم السري غير متطابق")
                .required("هذا الحقل مطلوب"),
        }),
        onSubmit: (values) => onSubmit(values.password),
    });

    return (
        <form onSubmit={formik.handleSubmit} className="space-y-4">
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
            <Button
                type="submit"
                className={`w-full block sm:text-2xl text-xl text-center font-bold ${
                    !formik.isValid
                        ? "opacity-50 hover:cursor-not-allowed hover:!opacity-50"
                        : ""
                }`}
                fullRounded
            >
                تاكيد كلمة المرور الجديدة
            </Button>
        </form>
    );
};

export default function ForgotPassword() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleEmailSubmit = (email: string) => {
        setEmail(email);
        if (email.toLowerCase() === "tech@cell.com") {
            setStep(2);
            setError("");
        } else {
            setError("البريد الالكتروني غير موجود");
        }
    };

    const handleOtpSubmit = (otp: string) => {
        setOtp(otp);
        if (otp === "000000") {
            setStep(3);
            setError("");
        } else {
            setError("الكود غير صحيح");
        }
    };

    const handlePasswordSubmit = (password: string) => {
        setOpenModal(true);
        setPassword(password);
        // console.log(
        //     "هذه تجربة لمهمة تغيير الباسورد اذا ضغطت علي حسنا سيتم نقلك الي الصفحة الرئيسية وهذه هي البيانات التي قمتَ بتسجيلها:\n" +
        //         `البريد الالكتروني: ${email}\n` +
        //         `كلمة المرور: ${password}\n` +
        //         `الرقم السري: ${otp}`
        // );
    };
    return (
        <div className="flex md:flex-row flex-col">
            <LinkButton
                to={step === 1 ? "/login" : ""}
                className="absolute left-5 top-3 font-bold text-md flex gap-2 items-center"
                onClick={() => setStep((perv) => perv - 1)}
            >
                عودة
                <FaArrowLeftLong className="w-[20px] h-[20px]" />
            </LinkButton>

            <section className="md:w-3/7 w-full md:min-h-screen min-h-fit bg-[#D1E8E24D] md:py-6 py-12 px-6 shadow-[-5px_0px_26px_19px_#0000001A] flex flex-col justify-center">
                <div className="sm:w-4/10 w-7/10 mx-auto mb-3">
                    <img src={LoginImage} alt="login" className="w-full" />
                </div>
                <h2 className="text-[#C29062] sm:text-3xl text-4xl text-center font-bold mb-8">
                    هل نسيت كلمة المرور ؟
                </h2>

                {error && <ErrorAlert message={error} />}

                {step === 1 && <EmailStep onNext={handleEmailSubmit} />}
                {step === 2 && <OtpStep onNext={handleOtpSubmit} />}
                {step === 3 && <PasswordStep onSubmit={handlePasswordSubmit} />}
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

            <Modal
                isOpen={openModal === true}
                Icon={FaCheck}
                onClose={() => {
                    console.log("closed modal");
                    setOpenModal(false);
                    navigate("/");
                }}
                title="تاكيد"
                description={
                    "سيتم نقلك الي الصفحة الرئيسية ولاغراض تجريبية هذه البيانات التي قمتَ بتسجيلها " +
                    `(البريد الالكتروني: ${email}) ` +
                    `(الرقم السري: ${otp}) ` +
                    `(كلمة المرور: ${password})`
                }
                type="info"
                actions={
                    <>
                        <Button
                            onClick={() => {
                                setOpenModal(false);
                                navigate("/");
                                // console.log("تم الخروج");
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
