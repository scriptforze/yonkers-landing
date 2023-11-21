import React, { useState } from "react";
import { ContactForm } from "../ContactForm";
import { ContactInformationSent } from "../ContactInformationSent";
import {
  ContactContentContainer,
  ContactTittleContentContainer,
  ContactText,
  ContactContentForm,
  ContactInfoContentContainer
} from "./styled";

const ContactContainer = () => {

  const [dataFromChild, setDataFromChild] = useState<boolean>();

  const handleDataFromChild = (data: boolean) => {
    setDataFromChild(data);
  }

  return (
    dataFromChild === true ?
      <ContactInformationSent />
    :
      <ContactContentContainer>
        <ContactTittleContentContainer>
          <ContactText>Contacto</ContactText>
          <ContactText 
            colorProps="#999999"
            styleProps="20px"
            weightProps="400"
            lineHeightProps="25.14px"
            marginProps="-30px 0px"
          >
            Escríbenos y nos pondremos en contacto contigo.
          </ContactText>
        </ContactTittleContentContainer>
        <ContactContentForm>
          <ContactForm onDataFromChild={handleDataFromChild} /> 
        </ContactContentForm>
        <ContactInfoContentContainer>
          <ContactText
            styleProps="16px"
            weightProps="400"
            lineHeightProps="10px"
          >
            Cali: (602) 325-8569
          </ContactText>
          <ContactText
            styleProps="16px"
            weightProps="400"
            lineHeightProps="10px"
          >
            Resto del país: 01-8000-879-9854
          </ContactText>
          <ContactText
            styleProps="16px"
            weightProps="400"
            lineHeightProps="10px"
          >
            soporte@yonkersgarage.com
          </ContactText>
        </ContactInfoContentContainer>
      </ContactContentContainer> 
  );
};

export default ContactContainer;
