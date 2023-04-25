import { Grid, Text } from "@nextui-org/react";
import {
  ContactPhone,
  ContactSocialMediaContainer,
  SocialMedia,
} from "./styled";
import Image from "next/image";

const ContactSocialMedia = () => {
  return (
    <ContactSocialMediaContainer>
      <ContactPhone>
        <Image
          width={16}
          height={16}
          alt="contact social media"
          src="/static/images/contact-icon.png"
        />
        <Text size={15} color="#FAFAFA" weight="bold">
          Cali: (602) 325-8569
        </Text>
      </ContactPhone>

      <SocialMedia>
        <Image
          width={16}
          height={16}
          alt="facebook social media"
          src="/static/images/facebook.png"
        />

        <Image
          width={16}
          height={16}
          alt="twitter social media"
          src="/static/images/twitter.png"
        />

        <Image
          width={16}
          height={16}
          alt="instagram social media"
          src="/static/images/instagram.png"
        />

        <Image
          width={16}
          height={16}
          alt="pinterest social media"
          src="/static/images/pinterest.png"
        />

        <Image
          width={16}
          height={16}
          alt="linkedin social media"
          src="/static/images/linkedin.png"
        />
      </SocialMedia>
    </ContactSocialMediaContainer>
  );
};

export default ContactSocialMedia;
