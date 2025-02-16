import React from 'react'
import "../styles/CheckBox.css"
import "../styles/style.css"


interface CheckBoxProps{
    id: string,
    name: string,
    value:string
    checked: boolean,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    label:string
}


const CheckBox: React.FC<CheckBoxProps> = ({id,name,value,checked,onChange,label}) => {
    
    return (
        <>
            <div className='main-color main-font font-medium text-[22px]  '>
                <input type='checkbox'
                className='custom-checkbox'
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                
            />

            <label htmlFor={id} className='custom-checkbox-label' >{label }</label>
                                   
            </div>
           
        </>
    )
}



export default CheckBox
