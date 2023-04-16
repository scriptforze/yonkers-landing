import { Button, Grid, Image } from "@nextui-org/react";

const Navbar = () => {
  return (
    <>
      <Grid.Container
        css={{
          background:
            " linear-gradient(180deg, rgba(62, 121, 247, 0.65) 0%, #3E79F7 53.12%, #3E79F7 100%)",
          width: "100%",
          height: "60px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid
          css={{
            alignItems: "center",
            justifyContent: "space-between",
            display: "flex",
            direction: "column",
          }}
        >
          <Image
            src="/assets/images/lines.png"
            alt="lines Menu"
            containerCss={{ width: "24px", height: "24px" }}
          />

          <Image
            src="/assets/images/logo.png"
            alt="logo icon"
            containerCss={{ width: "99px", height: "24px" }}
          />
        </Grid>

        <Grid
          css={{
            alignItems: "center",
            justifyContent: "space-between",
            display: "flex",
            direction: "column",
          }}
        >
          <Image
            src="/assets/images/search.png"
            alt="search icon"
            containerCss={{ width: "24px", height: "24px" }}
          />

          <Image
            src="/assets/images/person.png"
            alt="person icon"
            containerCss={{ width: "24px", height: "24px" }}
          />

          <Image
            src="/assets/images/cart.png"
            alt="shopping car"
            containerCss={{ width: "24px", height: "24px" }}
          />
        </Grid>
      </Grid.Container>
      <Grid
        css={{
          backgroundColor: "#D4D7DA",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          fontSize: "16px",
        }}
      >
        <Button
          css={{ color: "#464646", fontSize: "16px", fontWeight: "$normal" }}
          light
          auto
        >
          INICIO
        </Button>

        <Button
          css={{ color: "#464646", fontSize: "16px", fontWeight: "$normal" }}
          light
          auto
        >
          MARKETPLACE
        </Button>

        <Button
          css={{
            color: "#464646",
            fontSize: "16px",
            fontWeight: "$normal",
          }}
          light
          auto
        >
          CONTACTO
        </Button>
      </Grid>
    </>
  );
};

export default Navbar;
