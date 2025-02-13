import { useState } from "react";
import Breadcrumb from "../../company/components/Breadcrumb";
import data from "../../company/data";
import ProjectCard from "../components/ProjectCard";
import PropertyCardDetails from "../components/PropertyCardDetails";

const backPages = [
    {
        href: "/company/",
        text: "الرئيسية",
    },
];

function DrawerHomePage() {
    // const [openModal, setOpenModal] = useState<boolean>(false);
    const [targetId, setTargetId] = useState<number | null>(null);

    const closeOverlay = (event: React.MouseEvent<HTMLDivElement>) => {
        // Prevent closing if clicking inside the modal
        if ((event.target as HTMLElement).id === "overlay") {
            setTargetId(null);
        }
    };

    return (
        <div className="py-10 lg:px-10 px-4">
            <Breadcrumb
                currentPage="جميع العقارات"
                listOfPages={backPages}
                separator=">"
            />
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 py-6 ">
                {data.map((e) => (
                    <ProjectCard
                        project={e}
                        key={e.id}
                        clickShowDetailsHandler={() => {
                            setTargetId(e.id);
                            // setOpenModal(true);
                        }}
                    ></ProjectCard>
                ))}
            </div>

            {targetId && (
                <div
                    id="overlay"
                    className="bg-[rgba(0,0,0,0.8)] fixed inset-0 flex items-center justify-center z-30 cursor-pointer"
                    onClick={closeOverlay}
                    style={{ zIndex: 1000 }}
                >
                    <div
                        className="bg-white rounded-lg shadow-lg max-w-[80vw] md:max-w-md relative max-h-[95vh] overflow-auto z-40 cursor-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <PropertyCardDetails id={targetId.toString()} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default DrawerHomePage;
