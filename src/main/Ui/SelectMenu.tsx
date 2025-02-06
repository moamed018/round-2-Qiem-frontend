import React from "react";
import { FaArrowDown } from "react-icons/fa";

interface IconProps {
    className?: string;
}

interface SelectMenuFormProps {
    icon?: React.ComponentType<IconProps>;
    title?: string;
    error?: string;
    className?: string;
    classNameParent?: string;
    options: { value: string; label: string }[];
    value: string;
    onChange: (value: string) => void;
    onBlur: () => void;
}

const SelectMenuForm: React.FC<SelectMenuFormProps> = ({
    icon: Icon,
    title,
    error,
    className,
    classNameParent,
    options,
    onBlur,
    onChange,
    value,
    ...props
}) => {
    return (
        <div className={`relative ${classNameParent}`}>
            {Icon && (
                <Icon className="w-[24px] h-[24px] absolute top-3.5 right-4 opacity-40" />
            )}
            <select
                id="region"
                name="region"
                className={`appearance-none w-full py-3 ${
                    Icon ? "px-12" : "px-4"
                } ${
                    error ? "mb-0.5" : "mb-3"
                } rounded-full border-2 border-[#D1E8E280] focus:border-[#D1E8E2]  focus:outline-0 text-gray-500 ${
                    error ? "border-red-500" : "border-[#D1E8E280]"
                } ${className}`}
                onBlur={onBlur}
                onChange={(event) => onChange(event.target.value)}
                value={value}
                {...props}
            >
                <option value="" hidden>
                    {title || "اختر"}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            <FaArrowDown className="w-[20px] h-[20px] text-gray-400 opacity-70 pointer-events-none absolute inset-y-0 left-4 top-4 flex items-center" />

            {error && <p className="ps-4 text-sm text-red-600 mb-4">{error}</p>}
        </div>
    );
};

export default SelectMenuForm;
