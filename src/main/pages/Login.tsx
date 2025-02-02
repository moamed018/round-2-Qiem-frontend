import { useState } from "react";
import LinkButton from "../Ui/LinkButton";
import LoginImage from "../../assets/auth/login.png";

export default function Login() {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prevState) => !prevState);
    };

    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPassword(event.target.value);
    };

    const hideIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-eye-slash absolute top-4 left-4 opacity-40"
            viewBox="0 0 16 16"
        >
            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
            <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
        </svg>
    );

    const showIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-eye absolute top-4 left-4 opacity-40"
            viewBox="0 0 16 16"
        >
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
        </svg>
    );

    return (
        <div className=" flex">
            <LinkButton
                to="/"
                className="absolute left-5 top-3 flex gap-2"
                fullRounded={false}
            >
                عودة
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                    />
                </svg>
            </LinkButton>

            <section className="w-3/7 min-h-screen bg-[#D1E8E24D] py-8 px-6">
                <div className="w-3/5 mx-auto mb-5">
                    <img src={LoginImage} alt="login" className="w-full" />
                </div>
                <h2 className="text-[#C29062] text-5xl font-bold mb-4">
                    اهلاً بك!
                </h2>
                <p className="text-xl font-bold mb-6">مرحباً بعودتك مجدداً</p>

                <form className="w-8/10 ms-4">
                    <div className="relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-envelope absolute top-4 right-4 opacity-40"
                            viewBox="0 0 16 16"
                        >
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                        </svg>

                        <input
                            type="email"
                            placeholder="البريد الالكتروني"
                            className="w-full py-3 px-12 mb-3 rounded-full border-2 border-[#D1E8E2] focus:outline-0"
                        />
                    </div>
                    <div className="relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-lock absolute top-4 right-4 opacity-40"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                        </svg>

                        <input
                            type={isPasswordVisible ? "text" : "password"}
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="كلمة المرور"
                            className="w-full py-3 px-12 mb-5 rounded-full border-2 border-[#D1E8E2] focus:outline-0"
                        />

                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                        >
                            {isPasswordVisible ? showIcon : hideIcon}
                        </button>
                    </div>
                    <div className="mb-7">
                        <LinkButton
                            to="/home"
                            className="w-full block text-center"
                            fullRounded
                        >
                            تسجيل الدخول
                        </LinkButton>
                    </div>

                    <a
                        href="#"
                        className="text-black font-bold block text-center"
                    >
                        هل نسيت كلمة المرور ؟
                    </a>
                </form>
            </section>

            <section className=" bg-linear-to-b from-[#D1E8E2ff] to-[#D1E8E200] w-4/7 min-h-screen flex flex-col justify-center p-10 gap-5 items-start">
                <h2 className="text-[#C29062] text-4xl font-bold">
                    ليس لديك حساب!
                </h2>
                <p className="text-2xl ">
                    يمكنك تسجيل بياناتك وانشاء حساب الأن
                </p>
                <LinkButton
                    to="/register"
                    className="w-3/7 text-center flex items-center gap-10"
                    fullRounded
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                        />
                    </svg>
                    تسجــيــل
                </LinkButton>
            </section>
        </div>
    );
}
