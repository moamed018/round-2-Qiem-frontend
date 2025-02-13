export default function ProjectCard({
    project,
    status,
    children,
}: {
    project: {
        title: string;
        image: string;
        statusOld: string;
        statusApproved: string;
        statusPaid: string;
        price: string;
        priceType: string;
        description: {
            short: string;
            long: string;
            properties: string[];
        };
    };
    status?: "old" | "approved" | "paid";
    children?: React.ReactNode;
}) {
    let statusStyle: string = "";
    if (status === "old") {
        statusStyle = "text-white bg-[#C29062] border-[#fff] border";
    }
    if (status === "approved" || status === "paid") {
        if (
            project.statusApproved === "مقبول" ||
            project.statusPaid === "مدفوع"
        ) {
            statusStyle = "text-white bg-[#45ED0A] border-[#fff] border";
        } else {
            statusStyle = "text-white bg-[#FF0000] border-[#fff] border";
        }
    }

    return (
        <div className="group pb-4 shadow-2xl rounded-sm hover:bg-[#C29062] transition-all duration-300 hover:transform hover:translate-y-[-5px]">
            <div className="relative mx-1 mt-2 h-65 overflow-hidden">
                <span
                    className={`absolute z-50 left-2 top-2 text-xs py-2 px-8 font-bold rounded-full ${statusStyle}`}
                >
                    {status === "old"
                        ? project.statusOld
                        : status === "approved"
                        ? project.statusApproved
                        : status === "paid"
                        ? project.statusPaid
                        : ""}
                </span>
                <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                    src={project.image} alt={project.title}
                />
            </div>
            <div className="px-3 mb-1 group-hover:text-white transition-all duration-300">
                <h2 className="truncate mt-3 text-sm font-bold ">
                    {project.title}
                </h2>
                <h3 className="text-xl font-bold text-[#C29062] group-hover:text-white transition-all duration-300">
                    {project.price} {project.priceType}
                </h3>
                <p className="line-clamp-2">{project.description.long}</p>
            </div>
            {children && <div className="px-3 py-2 bg-white">{children}</div>}
        </div>
    );
}
