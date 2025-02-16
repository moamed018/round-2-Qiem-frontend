import ProjectCard from "./../components/ProjectCard";
import data from "../data.ts";

function CompanyPaidProjects() {
    return (
        <div className="py-10 lg:px-10 px-4">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 ">
                {data.map((e) => (
                    <ProjectCard
                        project={e}
                        status="paid"
                        key={e.id}
                    ></ProjectCard>
                ))}
            </div>
        </div>
    );
}

export default CompanyPaidProjects;
