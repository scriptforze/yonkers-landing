import React, { useState } from "react";
import { ContactFormContainer,
    ContactFormText,
    ContactFormInput,
    ContactFormTextArea,
    ContactFormButton,
    FilterCheckBox } from "./styled";

interface ChildComponentProps {
  onDataFromChild: (data: boolean) => void;
}
    
const ContactForm: React.FC<ChildComponentProps> = ({ onDataFromChild }: ChildComponentProps) => {  

  const [data, setData] = useState(true);

  const sendDataToParent = () => {
    onDataFromChild(data);
  }
  
  const [inputValue, setInputValue] = useState<string>('');
  const [isFieldEmpty, setIsFieldEmpty] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsFieldEmpty(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      setIsFieldEmpty(true);
    } else {
      // Process the form submission
      console.log('Form submitted with value:', inputValue);
    }
  };

  return (
    <ContactFormContainer>
      <form action="" className="">
        <ContactFormText>Nombre</ContactFormText>
        <ContactFormInput
          type="text"
          placeholder="Ingrese su Nombre"
          onChange={handleInputChange}
          style={{ borderColor: isFieldEmpty ? 'red' : '#E8E8E8' }}
        />
        {isFieldEmpty && <p style={{ color: 'red' }}>This field is mandatory.</p>}
        <ContactFormText>Correo</ContactFormText>
        <ContactFormInput
          type="text"
          placeholder="Ingrese su Correo"
          required
        />
        <ContactFormText>Número de teléfono</ContactFormText>
        <ContactFormInput
          type="text"
          placeholder="+57 310 000 00 00"
          required
        />
        <ContactFormText>Mensaje</ContactFormText>
        <ContactFormTextArea
          type="TextArea"
          placeholder="Ingrese su Mensaje"
        />
        <FilterCheckBox/><ContactFormText marginProps="0px 0px 0px 16px">I agree to the Privacy statement</ContactFormText>
        <ContactFormButton onClick={sendDataToParent}>Enviar</ContactFormButton>
      </form>
    </ContactFormContainer>
  );
};

export default ContactForm;
