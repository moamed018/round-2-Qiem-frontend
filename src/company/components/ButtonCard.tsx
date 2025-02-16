import React from "react";

interface ButtonProps {
  label: string; 
  type?: "button"| "reset" | "submit";
  baseStyle?: string; 
  onClick?: () => void; 
}

const ButtonCard: React.FC<ButtonProps> = ({ label, baseStyle, onClick, type }) => {
  const buttonStyle = baseStyle || "px-4 py-2 bg-[#C29062]  rounded-md text-white font-semibold transition duration-300 flex items-center justify-center w-full cursor-pointer hover:bg-[#C29062E5]";

  return (
    <button className={buttonStyle} onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default ButtonCard;
