import React, { FormEvent, useState } from "react";

interface FormState {
  name: string;
  email: string;
}

const ContactForm = () => {
  //define a form component with typed state and form handlers
  const [formState, SetFormState] = useState<FormState>({
    name: "",
    email: "",
  });

  const handleInputChange = (e:React.ChangeEvent <HTMLInputElement>) => { 
    const {name,value}= e.target;

    SetFormState((prev) => ({ ...prev,[name]: value }))
   };

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => { 
    e.preventDefault()
    console.log("Form Submitted");

    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formState.name} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formState.email} onChange={handleInputChange} />
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
