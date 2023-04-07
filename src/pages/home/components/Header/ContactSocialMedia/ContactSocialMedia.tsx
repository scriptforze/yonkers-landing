import { Grid, Text, Image } from "@nextui-org/react";

const ContactSocialMedia = () => {
  return (
    <Grid.Container
      direction="row"
      justify="space-between"
      css={{ backgroundColor: "#091D47", display: "flex", height: "60px" }}
      alignItems="center"
    >
      <Grid
        css={{
          alignItems: "center",
          justifyContent: "space-between",
          display: "flex",
          direction: "row",
          width: "156px",
        }}
      >
        <Image
          src="/assets/images/contact-icon.png"
          alt="contact social media"
          containerCss={{ width: "13px", height: "12px" }}
        />
        <Text size={15} color="#FAFAFA" weight="bold">
          Cali: (602) 325-8569
        </Text>
      </Grid>

      <Grid
        css={{
          justifyContent: "space-around",
          display: "flex",
          direction: "row",
          width: "130px",
        }}
      >
        <Image
          src="/assets/images/facebook.png"
          alt="facebook social media"
          containerCss={{ width: "16px", height: "16px" }}
        />

        <Image
          src="/assets/images/twitter.png"
          alt="twitter social media"
          containerCss={{ width: "16px", height: "16px" }}
        />

        <Image
          src="/assets/images/instagram.png"
          alt="instagram social media"
          containerCss={{ width: "16px", height: "16px" }}
        />

        <Image
          src="/assets/images/pinterest.png"
          alt="pinterest social media"
          containerCss={{ width: "16px", height: "16px" }}
        />

        <Image
          src="/assets/images/linkedin.png"
          alt="linkedin social media"
          containerCss={{ width: "16px", height: "16px" }}
        />
      </Grid>
    </Grid.Container>
  );
};

export default ContactSocialMedia;
