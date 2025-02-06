import { Link } from "react-router";

interface LinkButtonProps {
    to: string;
    className?: string;
    fullRounded?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
}

export default function LinkButton({
    to,
    children,
    className = "",
    fullRounded = false,
    ...props
}: LinkButtonProps) {
    return (
        <Link
            to={to}
            className={`bg-[#C29062] !text-white py-3 px-5 hover:opacity-80 transition-all duration-500 ${className} ${
                fullRounded ? "rounded-full" : "rounded-2xl"
            }`}
            {...props}
        >
            {children}
        </Link>
    );
}
