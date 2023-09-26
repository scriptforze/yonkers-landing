import { Button, Grid, Image } from "@nextui-org/react";
import style from "@/styles/Navbar.module.css"


const Nav = () => {
  return (
      <Grid className={style.nav} >
        <Button
          css={{
            color: "#FFFFFF",
            padding: "32px 10px",
            gap: "10px",
            lineHeight: "19px",
            textAlign: "center",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "400",
            marginTop: "13px"
          }}
          light
          auto
        >
          Inicio 
        </Button>
        <span className={style.nav_underLines}></span>
        <Button
          css={{
            color: "#FFFFFF",
            padding: "32px 10px",
            gap: "10px",
            lineHeight: "19px",
            textAlign: "center",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "400",
            marginTop: "13px"
          }}
          light
          auto
        >
          Productos
        </Button>
        <span className={style.nav_underLines}></span>
        <Button
          css={{
            color: "#FFFFFF",
            padding: "32px 10px",
            gap: "10px",
            lineHeight: "19px",
            textAlign: "center",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "400",
            marginTop: "13px"
          }}
          light
          auto
        >
          Contacto
        </Button>
        <span className={style.nav_underLines}></span>
        <Button
          css={{
            color: "#FFFFFF",
            padding: "32px 10px",
            gap: "10px",
            lineHeight: "19px",                                                                                         textAlign: "center",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "400",
            marginTop: "13px"
          }}
          light
          auto
        >
          Preguntas Frecuentes
        </Button>
        <span className={style.nav_underLines}></span>

        <span className={style.span}></span>
        <footer className={style.nav_footer}>
          <Image
            className={style.nav_footer_facebook}
            src= {"/assets/images/facebook.png"}
            alt="lines Menu"
            containerCss={{ width: "38px", height: "38px" }}
            // onClick={toggleDropdown}
          />
          <Image
            className={style.nav_footer_twitter}
            src= {"/assets/images/twitter.png"}
            alt="lines Menu"
            containerCss={{ width: "38px", height: "38px"}}
            // onClick={toggleDropdown}
          />
          <Image
            className={style.nav_footer_instagram}
            src= {"/assets/images/instagram.png"}
            alt="lines Menu"
            containerCss={{ width: "38px", height: "38px" }}
            // onClick={toggleDropdown}
          />
          <Image
            className={style.nav_footer_pinterest}
            src= {"/assets/images/pinterest.png"}
            alt="lines Menu"
            containerCss={{ width: "38px", height: "38px" }}
            // onClick={toggleDropdown}
          />
          <Image
            className={style.nav_footer_linkedin}
            src= {"/assets/images/linkedin.png"}
            alt="lines Menu"
            containerCss={{ width: "38px", height: "38px" }}
            // onClick={toggleDropdown}
          />
        </footer>
      </Grid> 
  );
};

export default Nav;
