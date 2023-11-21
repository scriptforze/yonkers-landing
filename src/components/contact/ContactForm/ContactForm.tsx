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
  
  return (
    <ContactFormContainer>
      <form action="" className="">
        <ContactFormText>Nombre</ContactFormText>
        <ContactFormInput
          type="text"
          placeholder="Ingrese su Nombre"
        />
        <ContactFormText>Correo</ContactFormText>
        <ContactFormInput
          type="text"
          placeholder="Ingrese su Correo"
        />
        <ContactFormText>Número de teléfono</ContactFormText>
        <ContactFormInput
          type="text"
          placeholder="+57 310 000 00 00"
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
