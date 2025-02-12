import { Link } from "react-router-dom";

export default function Breadcrumb({
    currentPage,
    listOfPages,
    separator = "/",
}: {
    currentPage?: string;
    listOfPages?: {
        href: string;
        text: string;
    }[];
    separator?: string;
}) {
    return (
        <div className="text-[#C29062] font-bold sm:text-lg text-sm mb-4 flex flex-wrap gap-2 px-2">
            {listOfPages?.map((e, i) => {
                return (
                    <div key={i}>
                        <Link
                            className="border-b border-transparent hover:border-[#C29062] transition-all duration-100 me-2"
                            to={e.href}
                        >
                            {e.text}
                        </Link>
                        {separator}
                    </div>
                );
            })}
            <span className="text-black">{currentPage}</span>
        </div>
    );
}
