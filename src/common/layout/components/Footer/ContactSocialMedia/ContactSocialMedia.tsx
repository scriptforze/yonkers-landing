import {
  SocialMedia,
  CopyRightText,
  ContactSocialMediaContainer,
} from "./styled";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/common/assets/images/logo.png";
import TwitterIcon from "@/common/assets/images/twitter.png";
import FacebookIcon from "@/common/assets/images/facebook.png";
import LinkedinIcon from "@/common/assets/images/linkedin.png";
import PinterestIcon from "@/common/assets/images/pinterest.png";
import InstagramIcon from "@/common/assets/images/instagram.png";

const ContactSocialMedia = () => {
  return (
    <ContactSocialMediaContainer>
        <Link href={"/"}>
          <Image src={Logo} width={160} alt="contact social media" />
        </Link>

      <CopyRightText>
        © 2023 Yonker’s Garage Autopartes | Todos los Derechos Reservados
      </CopyRightText>

      <SocialMedia>
        <Link href={"https://web.facebook.com/"} target="_blank">
          <Image
            width={25}
            height={25}
            src={FacebookIcon}
            alt="facebook social media"
          />
        </Link>
        <Link href={"https://twitter.com/"} target="_blank">
          <Image
            width={25}
            height={25}
            src={TwitterIcon}
            alt="twitter social media"
          />
        </Link>
        <Link href={"https://www.instagram.com/"} target="_blank">
          <Image
            width={25}
            height={25}
            src={InstagramIcon}
            alt="instagram social media"
          />
        </Link>
        <Link href={"https://co.pinterest.com/"} target="_blank">
          <Image
            width={25}
            height={25}
            src={PinterestIcon}
            alt="pinterest social media"
          />
        </Link>
        <Link href={"https://co.linkedin.com"} target="_blank">
          <Image
            width={25}
            height={25}
            src={LinkedinIcon}
            alt="linkedin social media"
          />
        </Link>
      </SocialMedia>
    </ContactSocialMediaContainer>
  );
};

export default ContactSocialMedia;
