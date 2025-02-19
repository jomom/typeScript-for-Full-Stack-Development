import React from 'react'

interface buttonProps{
    label: string;
    onClick:  () => void;
    disabled?: boolean;

}


const Button: React.FC<buttonProps> = ({label,onClick,disabled}) => {
  return (
    <div>
        <button onClick={onClick} disabled ={disabled}>
            {label}
        </button>
    </div>
  )
}

export default Button