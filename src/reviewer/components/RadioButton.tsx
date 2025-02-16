import React from "react";
import "../styles/RadioButton.css";


interface RadioButtonProps {
  id: string;
  name: string;
  label: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ id, name, label, value, checked, onChange }) => {
  return (
    <>
      <div className='main-color main-font font-medium text-[22px]  '>
         <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="custom-radio"
          />
          <label htmlFor={id} className="custom-radio-label">
        {label}
      </label>
        
       </div>
         
     
    </>
  );
};

export default RadioButton;
