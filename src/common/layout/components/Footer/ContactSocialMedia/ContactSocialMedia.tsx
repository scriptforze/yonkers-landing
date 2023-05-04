import { Grid, Text } from "@nextui-org/react";
import {
  ContactPhone,
  ContactSocialMediaContainer,
  SocialMedia,
} from "./styled";
import Image from "next/image";

import TwitterIcon from "@/common/assets/images/twitter.png";
import FacebookIcon from "@/common/assets/images/facebook.png";
import LinkedinIcon from "@/common/assets/images/linkedin.png";
import PinterestIcon from "@/common/assets/images/pinterest.png";
import InstagramIcon from "@/common/assets/images/instagram.png";
import ContactIcon from "@/common/assets/images/contact-icon.png";

const ContactSocialMedia = () => {
  return (
    <ContactSocialMediaContainer>
      <ContactPhone>
        <Image
          width={16}
          height={16}
          src={ContactIcon}
          alt="contact social media"
        />
        <Text size={15} color="#FAFAFA" weight="bold">
          Cali: (602) 325-8569
        </Text>
      </ContactPhone>

      <SocialMedia>
        <Image
          width={16}
          height={16}
          src={FacebookIcon}
          alt="facebook social media"
        />

        <Image
          width={16}
          height={16}
          src={TwitterIcon}
          alt="twitter social media"
        />

        <Image
          width={16}
          height={16}
          src={InstagramIcon}
          alt="instagram social media"
        />

        <Image
          width={16}
          height={16}
          src={PinterestIcon}
          alt="pinterest social media"
        />

        <Image
          width={16}
          height={16}
          src={LinkedinIcon}
          alt="linkedin social media"
        />
      </SocialMedia>
    </ContactSocialMediaContainer>
  );
};

export default ContactSocialMedia;
