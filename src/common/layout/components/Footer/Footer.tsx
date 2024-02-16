import { Brands } from "../Brands";
import { ContactSocialMedia } from "./ContactSocialMedia";
import { NewLetters } from "./NewsLetters";
import { SiteMap } from "./SiteMap";
import { FooterContainer, MainFooterContainer } from "./styled";

const Footer = () => {
  return (
    <>
      <Brands />
      <FooterContainer>
        <MainFooterContainer>
          <SiteMap />
          <NewLetters />
        </MainFooterContainer>
        <ContactSocialMedia />
      </FooterContainer>
    </>
  );
};

export default Footer;
