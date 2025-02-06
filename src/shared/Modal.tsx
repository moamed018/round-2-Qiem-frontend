import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import { IoIosCloseCircle } from "react-icons/io";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    type?: "error" | "confirmation" | "info";
    actions?: ReactNode;
    Icon?: React.ElementType;
}

const modalThemes = {
    confirmation: "bg-white text-[#C29062] border-[#C29062]",
    info: "bg-white text-green-800 border-green-500",
    error: "bg-red-500 text-white border-red-500",
};

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    description,
    type = "confirmation",
    actions,
    Icon,
}) => {
    if (!isOpen) return null;

    const theme = modalThemes[type];

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return ReactDOM.createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={handleBackdropClick}
        >
            <div
                className={`relative w-full max-w-xl p-4 mx-4 border rounded-xl shadow-xl min-h-80 flex flex-col justify-between  ${theme}`}
            >
                <button
                    onClick={onClose}
                    className="absolute right-1 top-1 rounded hover:bg-black/10 cursor-pointer"
                >
                    <IoIosCloseCircle className="w-[40px] h-[40px] " />
                </button>
                <div className="flex flex-col justify-between items-center gap-3 mb-4 pt-10 ">
                    {Icon && (
                        <Icon
                            className={`text-7xl text-white p-4 rounded-full mb-4 ${
                                type === "confirmation"
                                    ? "bg-[#C29062]"
                                    : type === "info"
                                    ? "bg-green-500"
                                    : ""
                            }`}
                        />
                    )}
                    <h2 className="text-3xl font-bold">{title}</h2>
                </div>
                <p className="mb-6 text-center text-2xl font-bold text-black">
                    {description}
                </p>
                <div className="flex justify-evenly gap-2">{actions}</div>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
