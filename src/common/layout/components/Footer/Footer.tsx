import { Brands } from "../Brands";
import { ContactSocialMedia } from "./ContactSocialMedia";
import { NewLetters } from "./NewsLetters";
import { SiteMap } from "./SiteMap";
import { FooterContainer } from "./styled";

const Footer = () => {
  return (
    <>
      <Brands />
      <FooterContainer>
        <SiteMap />
        <NewLetters />
        <ContactSocialMedia />
      </FooterContainer>
    </>
  );
};

export default Footer;
