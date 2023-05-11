import {
  SocialMedia,
  CopyRightText,
  ContactSocialMediaContainer,
} from "./styled";
import Image from "next/image";

import Logo from "@/common/assets/images/logo.png";
import TwitterIcon from "@/common/assets/images/twitter.png";
import FacebookIcon from "@/common/assets/images/facebook.png";
import LinkedinIcon from "@/common/assets/images/linkedin.png";
import PinterestIcon from "@/common/assets/images/pinterest.png";
import InstagramIcon from "@/common/assets/images/instagram.png";

const ContactSocialMedia = () => {
  return (
    <ContactSocialMediaContainer>
      <Image src={Logo} width={160} alt="contact social media" />

      <CopyRightText>
        © 2023 Yonker’s Garage Autopartes | Todos los Derechos Reservados
      </CopyRightText>

      <SocialMedia>
        <Image
          width={25}
          height={25}
          src={FacebookIcon}
          alt="facebook social media"
        />

        <Image
          width={25}
          height={25}
          src={TwitterIcon}
          alt="twitter social media"
        />

        <Image
          width={25}
          height={25}
          src={InstagramIcon}
          alt="instagram social media"
        />

        <Image
          width={25}
          height={25}
          src={PinterestIcon}
          alt="pinterest social media"
        />

        <Image
          width={25}
          height={25}
          src={LinkedinIcon}
          alt="linkedin social media"
        />
      </SocialMedia>
    </ContactSocialMediaContainer>
  );
};

export default ContactSocialMedia;
