import React from "react";
import avatar from "/src/assets/avatar.png";
import ButtonCard from "./ButtonCard";

export interface ReportCardProps {
    name: string;
    type?: string;
    onDownload?: () => void;
    onShowReport?: () => void;
}

const TeamReportCard: React.FC<ReportCardProps> = ({
    name,
    type,
    onDownload,
    onShowReport,
}) => {
    return (
        <div className="border border-[#D1E8E2] p-5 rounded-lg shadow-md bg-white flex items-center justify-between w-full max-w-3xl mx-auto flex-row">
            <div className="flex w-full">
                <img
                    className="rounded-lg shadow-md h-[80px] w-[80px]"
                    src={avatar}
                    alt={name}
                />
                <div className="flex flex-col justify-center flex-grow ms-5">
                    <p className="font-bold text-lg text-[#C29062] mt-1">{name}</p>

                    <div className="flex gap-3 mt-3">
                        <ButtonCard
                            baseStyle="px-4 py-2 bg-gradient-to-r from-[#C29062] to-[#000000E5] rounded-md text-white font-semibold transition duration-300 hover:opacity-80 cursor-pointer"
                            label="تحميل"
                            onClick={onDownload}
                        />

                        {type === "Reviewer" && onShowReport && (
                            <ButtonCard
                                baseStyle="px-4 py-2 bg-[#8B5A2B] rounded-md text-white font-semibold transition duration-300 hover:opacity-80 cursor-pointer"
                                label="عرض التقرير"
                                onClick={onShowReport}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamReportCard;
