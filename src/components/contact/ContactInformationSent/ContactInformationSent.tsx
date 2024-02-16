import Link from 'next/link';
import {
  ContactContainerInformationSent,
  ContactTextImage,
  ContactTextTittleInformationSent,
  ContactTextInformationSent,
  ButtonContainer,
  ContactButtonInformationSent
} from "./styled";
import ContactcheckSent from "@/common/assets/images/check.svg";

interface NavbarProps {
  appear: boolean | string;
}

const contactInformationSent: React.FC<NavbarProps> = ({ appear }) => {

  return (
    <ContactContainerInformationSent>
      <ContactTextImage src={ContactcheckSent} alt="Image sent check" />
      <ContactTextTittleInformationSent>
        {appear === "false" ? (
          "Tu orden ha sido recibida"
        ) : (
          "¡Tu información ha sido enviada!"
        )}
      </ContactTextTittleInformationSent>
      <ContactTextInformationSent>
        {appear === "false" ? (
          "Mantente al tanto de su trayecto rastreando tú orden"
        ) : (
          "Uno de nuestros ejecutivos comerciales se comunicara contigo en el menor tiempo posible."
        )}
      </ContactTextInformationSent>
      {appear === "false" ? (
        ""
      ) : (
        <ButtonContainer>
          <Link href="http://localhost:3000/">{/* change URL */}
            <ContactButtonInformationSent>
              Ir al inicio
            </ContactButtonInformationSent>
          </Link>
        </ButtonContainer>
      )}
    </ContactContainerInformationSent>
  );
};

export default contactInformationSent;
