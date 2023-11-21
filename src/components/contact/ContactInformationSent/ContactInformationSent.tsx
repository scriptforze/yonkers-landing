import React from "react";
import Link from 'next/link'
import { ContactContainerInformationSent,
         ContactTextImage,
         ContactTextTittleInformationSent,
         ContactTextInformationSent,
         ButtonContainer,
         ContactButtonInformationSent } from "./styled";
import ContactcheckSent from "@/common/assets/images/check.svg";

const contactInformationSent = () => { 
  
  return (
    <ContactContainerInformationSent>
      <ContactTextImage src={ContactcheckSent} alt="Image sent check"/>
      <ContactTextTittleInformationSent>
        ¡Tu información ha sido enviada!
      </ContactTextTittleInformationSent>
      <ContactTextInformationSent>
        Uno de nuestros ejecutivos comerciales se comunicara contigo en el menor tiempo posible.
      </ContactTextInformationSent>
      
        <ButtonContainer>
        <Link href="http://localhost:3000/">{/* Obviosly change URL. */}
          <ContactButtonInformationSent>
            Ir al inicio
          </ContactButtonInformationSent>
          </Link>
        </ButtonContainer>
      
    </ContactContainerInformationSent>
  );
};

export default contactInformationSent;
