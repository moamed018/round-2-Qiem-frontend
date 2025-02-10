import React from "react";

interface LinkButtonProps {
    className?: string;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
    fullRounded?: boolean;
    disabled?: boolean;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    id?: string;
}

export default function Button({
    onClick,
    children,
    className = "",
    fullRounded = false,
    type = "button",
    disabled = false,
    ...props
}: LinkButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`bg-[#C29062] !text-white py-3 px-5 cursor-pointer hover:opacity-80 transition-all duration-500 ${className} ${
                fullRounded ? "rounded-full" : "rounded-2xl"
            }`}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}
