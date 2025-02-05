import { useState } from "react";
import Input from "./Input";

import { TfiLock } from "react-icons/tfi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface InputPasswordProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    placeholder?: string;
}

export default function InputPassword({
    className,
    error,
    onChange,
    placeholder,
    ...props
}: InputPasswordProps) {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prevState) => !prevState);
    };

    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPassword(event.target.value);
        if (onChange) {
            onChange(event);
        }
    };

    return (
        <div className="relative">
            <Input
                icon={TfiLock}
                placeholder={placeholder || "كلمة المرور"}
                type={isPasswordVisible ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                className={className}
                error={error}
                {...props}
            />
            <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-2.5 left-4 opacity-90 "
                tabIndex={-1}
            >
                {isPasswordVisible ? (
                    <AiOutlineEyeInvisible className="w-[30px] h-[30px] " />
                ) : (
                    <AiOutlineEye className="w-[30px] h-[30px] " />
                )}
            </button>
        </div>
    );
}
