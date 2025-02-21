import React, { useRef } from 'react'

const FocusInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);//Specify the type

    const focusInput = () => { //function to handle the focus input action
        inputRef.current!.focus();//sets focus to the input fields   
          }

  return (
    <div>
        <input type="text"  ref ={inputRef} />//connects inout field to our inputRef
         <button onClick={focusInput} >//calls focusInput when clicked
            Focus Input
         </button>
    </div>

  )
}

export default FocusInput