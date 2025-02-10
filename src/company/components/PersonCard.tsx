import React from "react";
import avatar from '/src/assets/avatar.png';
import ButtonCard from "./ButtonCard";

interface PersonCardProps {
  name: string;
  additionalInfo: string;
  type: string;
  onEdit: () => void;
  onDelete: () => void;
  onSend: () => void;
}

const PersonCard: React.FC<PersonCardProps> = ({ name, additionalInfo, type, onEdit, onDelete, onSend }) => {
  return (
    <div className="border border-[#D1E8E2] p-3 rounded-lg shadow-md bg-white flex flex-col h-ful  relative ">
        <div className="flex h-full items-center">
            <img className="rounded-lg shadow-md h-[97px] w-[97px] " src={avatar} alt={name} />
            <div className="flex flex-col justify-start ps-3 pt-4">
                <p className="font-bold text-lg text-[#C29062]">{name}</p>
                <p className=" font-bold text-gray-700 text-sm">{additionalInfo}</p>
            </div>
            
        </div>
        <div className=" absolute top-3 left-4 text-xs text-center text-white bg-[#C29062] p-1 rounded-2xl w-[80px]">
        <p>
        {type === "drawer" ? "رسام" : "معاين"}
      </p>
        </div>
        <div className=" flex-grow flex flex-col justify-end mt-3 mt-3">
        <ButtonCard label={"تعديل"} onClick={onEdit} />
        <div className="flex justify-between mt-3">
          <div className="me-2 w-full">
            <ButtonCard
              baseStyle="px-4 py-2 bg-gradient-to-r from-[#C29062] to-[#000000E5] rounded-md text-white font-semibold transition duration-300 flex justify-center items-center hover:bg-[#C29058] w-full cursor-pointer"
              label="حذف"
              onClick={onDelete}
            />
          </div>
          <div className="ms-2 w-full">
            <ButtonCard
              baseStyle="px-4 py-2 bg-gradient-to-r from-[#C29062] to-[#000000E5] rounded-md text-white font-semibold transition duration-300 flex justify-center hover:bg-[#C29058E5] w-full cursor-pointer"
              label="إرسال"
              onClick={onSend}
            />
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default PersonCard;
