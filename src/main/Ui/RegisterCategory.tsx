import { Link } from "react-router";

interface RegisterCategoryProps {
    image?: string;
    text: string;
    to?: string;
    className?: string;
}

export default function RegisterCategory({
    image,
    text,
    to = "/",
    className = "",
}: RegisterCategoryProps) {
    return (
        <Link
            to={to}
            className={`flex sm:flex-row sm:gap-2 flex-col-reverse gap-4 items-center justify-between w-full bg-[#D1E8E24D] pe-10 ps-16 py-4 rounded-4xl mb-4 border border-[#D1E8E2] text-[#C29062] sm:text-4xl text-3xl hover:border-[#C29062] transition-all duration-300 ${className}`}
        >
            {text}
            <div className="w-[100px] h-[80px]">
                <img src={image} alt={text} className="w-full h-full" />
            </div>
        </Link>
    );
}
