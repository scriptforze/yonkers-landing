import { Grid, Image, Text, Button } from "@nextui-org/react";

const PrimarySlider = () => {
  return (
    <Grid.Container
      xs={12}
      sm={12}
      md={12}
      xl={12}
      css={{
        width: "100%",
        background:
          "linear-gradient(263.62deg, #4265AF 5.03%, rgba(42, 72, 139, 0.945038) 37.18%, rgba(0, 21, 77, 0.85) 53.01%, rgba(0, 23, 82, 0.79) 65.37%, rgba(0, 24, 86, 0.87) 80.71%, #001856 100%)",
      }}
    >
      <Grid
        css={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Image
          css={{ padding: "32px 16px 32px 16px" }}
          src="/static/images/banner.png"
          alt="banner image"
          containerCss={{ width: "375px" }}
        />
      </Grid>

      <Grid>
        <Text
          size={24}
          color="#FAFAFA"
          weight="bold"
          css={{
            padding: "0 60px 0 60px",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          ¿No encuentras el repuesto para tu carro? ¡Escríbenos! Lo importamos
          por ti
        </Text>
      </Grid>

      <Grid
        className="btn btn-primary"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          width: "100%",
          marginTop: "8px",
          paddingBottom: "40px",
        }}
      >
        <Button
          css={{
            backgroundColor: "#FE7062",
            borderRadius: "4px",
            fontSize: "18px",
          }}
        >
          ¡Escríbenos!
        </Button>
      </Grid>
    </Grid.Container>
  );
};

export default PrimarySlider;
