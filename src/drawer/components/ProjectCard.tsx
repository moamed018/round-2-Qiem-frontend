import Button from "../../main/Ui/Button";
import LinkButton from "../../main/Ui/LinkButton";
import ChatIcon from "../../assets/chat_icon.png";
import { Link } from "react-router-dom";

export default function ProjectCard({
    project,
    clickShowDetailsHandler,
}: {
    project: {
        title: string;
        image: string;
        price: string;
        priceType: string;
        description: {
            short: string;
            long: string;
            properties: string[];
        };
        companyName: string;
    };
    clickShowDetailsHandler?: () => void;
}) {
    return (
        <div className="group pb-4 shadow-2xl rounded-sm transition-all duration-300 hover:transform hover:translate-y-[-5px] ">
            <div className="relative mx-1 mt-2 h-65 overflow-hidden">
                <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                    src={project.image}
                />
            </div>
            <div className="px-3">
                <div className="flex items-center gap-1 mb-1">
                    <div className="max-w-3/5">
                        <h2 className="truncate mt-3 text-sm font-bold ">
                            {project.title}
                        </h2>
                        <p className="line-clamp-2">
                            {project.description.long}
                        </p>
                    </div>
                    <LinkButton
                        to="#"
                        className="w-fit text-xs font-bold !px-2 !py-2 !rounded-sm hover:scale-90 transition-all duration-300 text-center"
                    >
                        عرض تقرير المعاينة
                    </LinkButton>
                </div>
                <p className="font-bold text-xs">
                    اسم شركة التقييم :{" "}
                    <span className="text-[#C29062]">
                        {project.companyName}
                    </span>
                </p>
                <div className="py-2 flex justify-between items-center">
                    <Button
                        onClick={clickShowDetailsHandler}
                        className="block rounded-sm text-center bg-linear-to-l from-[#000000] to-[#C29062] grow"
                    >
                        مشاهدة التفاصيل
                    </Button>
                    <Link
                        to="#"
                        className="block w-[70px] h-[70px] p-4 hover:scale-90 transition-all duration-300"
                    >
                        <img
                            src={ChatIcon}
                            alt="chat icon"
                            className="w-full h-full inline-block"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
