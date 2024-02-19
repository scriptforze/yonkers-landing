import { Responsive } from "@/common/components";
import {
  ListItem,
  CTAButton,
  CTAContainer,
  ListItemText,
  UnorderedList,
  DisclaimerText,
  CreateAccountTitle,
  CreateAccountContainer,
  CreateAccountImage,
} from "./styled";
import CreateAccountImageSource from "@/common/assets/images/image_signup.webp";

const CreateAccount = () => {
  return (
    <CreateAccountContainer>
      <Responsive xl xxl>
        <CreateAccountImage
          alt="Create Account Image"
          src={CreateAccountImageSource}
        />
      </Responsive>
      <CTAContainer>
        <CreateAccountTitle>
          Crea tu cuenta para sacarle el máximo provecho a la tienda
        </CreateAccountTitle>

        <UnorderedList>
          <ListItem>
            <ListItemText>Recibe alertas de ofertas y descuentos</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>Gestiona tus pedidos</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>¡Y muchos más!</ListItemText>
          </ListItem>
        </UnorderedList>

        <CTAButton>Crear cuenta</CTAButton>

        <DisclaimerText>
          No te preocupes, inscribirte es completamente gratis.
        </DisclaimerText>
      </CTAContainer>
    </CreateAccountContainer>
  );
};

export default CreateAccount;
