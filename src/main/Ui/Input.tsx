import React from "react";

interface IconProps {
    className?: string;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ComponentType<IconProps>;
    error?: string;
}

export default function Input({
    icon: Icon,
    className,
    error,
    ...props
}: InputProps) {
    return (
        <div className="relative">
            {Icon && (
                <Icon className="w-[24px] h-[24px] absolute top-3.5 right-4 opacity-40" />
            )}
            <input
                type="email"
                className={`w-full py-3 px-12 ${
                    error ? "mb-0.5" : "mb-3"
                } rounded-full border-2 border-[#D1E8E280] focus:border-[#D1E8E2] focus:outline-0 ${
                    error ? "border-red-500" : "border-[#D1E8E280]"
                } ${className}`}
                {...props}
            />
            {error && <p className="ps-4 text-sm text-red-600 mb-3">{error}</p>}
        </div>
    );
}
