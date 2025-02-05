import React from "react";
import { FaPlus } from "react-icons/fa";

interface InputFileProps {
    file: File | null;
    handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    className?: string;
    title?: string;
}

const InputFile: React.FC<InputFileProps> = ({
    file,
    handleFileChange,
    error,
    className,
    title = "اختر ملف",
    ...props
}) => {
    return (
        <div className="">
            <label
                htmlFor="file-upload"
                className={`w-full block py-3 px-12 cursor-pointer shadow-md transition text-center truncate rounded-xl border-2 border-[#D1E8E2] focus:outline-0 text-2xl font-bold  ${
                    error ? "mb-1.5" : "mb-4"
                } ${
                    file
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-[#D1E8E280] hover:bg-[#D1E8E2]"
                } ${className}`}
                title={file ? file.name : title}
            >
                {file ? (
                    `تم رفع ${file.name}`
                ) : (
                    <span className="flex items-center justify-center gap-4">
                        {title} <FaPlus className="w-[32px] h-[32px]" />
                    </span>
                )}
            </label>
            <input
                id="file-upload"
                name="file"
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={handleFileChange}
                {...props}
            />
            {error && <p className="ps-4 text-sm text-red-600 mb-4">{error}</p>}
        </div>
    );
};

export default InputFile;
