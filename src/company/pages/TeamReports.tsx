import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReportCard from "../components/TeamReportCard";
import { staticTeamData } from "../data";

const TeamReports: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const teamMembers = id && staticTeamData[id] ? staticTeamData[id] : [];

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-center text-[#C29062] mb-6">
                تقارير الفريق للمشروع {id}
            </h2>

            {teamMembers.length > 0 ? (
                <div className="flex flex-col gap-6">
                    {teamMembers.map((member) => (
                        <ReportCard
                            key={member.id}
                            name={member.name}
                            type={member.type}
                            onDownload={() => alert(`تحميل تقرير ${member.name}`)}
                            onShowReport={() => 
                                navigate(`/company/projects/${id}/team-reports/report/${member.id}?role=${member.type}`)

                            }
                        />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">لا يوجد فريق لهذا المشروع.</p>
            )}
        </div>
    );
};

export default TeamReports;
