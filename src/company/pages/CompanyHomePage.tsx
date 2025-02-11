import ProjectCard from "./../components/ProjectCard";
import data from "../data.ts";
import LinkButton from "../../main/Ui/LinkButton.tsx";

function CompanyHomePage() {
    return (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 py-10 lg:px-10 px-4">
            {data.map((e) => (
                <ProjectCard project={e} status="old" key={e.id}>
                    <LinkButton
                        to={`/company/properties/${e.id}`}
                        className="block rounded-sm text-center bg-linear-to-l from-[#000000] to-[#C29062]"
                    >
                        مشاهدة التفاصيل
                    </LinkButton>
                </ProjectCard>
            ))}
        </div>
    );
}

export default CompanyHomePage;
