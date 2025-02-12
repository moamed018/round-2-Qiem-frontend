import ProjectCard from "./../components/ProjectCard";
import data from "../data.ts";
import LinkButton from "../../main/Ui/LinkButton.tsx";
import Breadcrumb from "../components/Breadcrumb.tsx";

const backPages = [
    {
        href: "/company/",
        text: "الرئيسية",
    },
];

function ProjectsPage() {
    return (
        <div className="py-10 lg:px-10 px-4">
            <Breadcrumb
                currentPage="المشاريع"
                listOfPages={backPages}
                separator=">"
            />

            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 ">
                {data.map((e) => (
                    <ProjectCard project={e} status="approved" key={e.id}>
                        <LinkButton
                            to={`/company/projects/${e.id}`}
                            className="block rounded-sm text-center bg-linear-to-l from-[#000000] to-[#C29062]"
                        >
                            أرسل عرض تقييم
                        </LinkButton>
                    </ProjectCard>
                ))}
            </div>
        </div>
    );
}

export default ProjectsPage;
