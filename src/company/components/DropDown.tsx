import React, { useState } from "react";
interface Option {
  id: number;
  name: string;
  additionalInfo: string;
  type: string;
}

interface DropDownProps {
  options: Option[];
  label: string;
  onSelect: (option: Option) => void;
  selectedOptions: Option[];
}

const DropDown: React.FC<DropDownProps> = ({ options, label, onSelect, selectedOptions }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedName = event.target.value;
    const selectedItem = options.find((option) => option.name === selectedName);
    
    if (selectedItem) {
      onSelect(selectedItem);
      setSelectedValue("");
    }
  };

  return (
    <div className="relative w-full group">
      <div className="flex items-center space-x-2">
        <select
          onChange={handleSelectChange}
          value={selectedValue}
          className="w-full p-3 text-lg focus:outline-none bg-[#d1e8e24d] border-b border-[#d8dfeb] group-hover:bg-gradient-to-r from-[#C29062] to-black group-hover:text-white transition-all duration-300 appearance-none"
          aria-label={label}
        >
          <option value="" className="text-black">{label}</option>
          {options.map(
            (option) =>
              !selectedOptions.some((selected) => selected.id === option.id) && (
                <option key={option.id} value={option.name} className="text-black">
                  {option.name}
                </option>
              )
          )}
        </select>
        <span className="absolute left-8 top-[18px] transform group-hover:text-white pointer-events-none">
          &#9660;
        </span>
      </div>
    </div>
  );
};

export default DropDown;
