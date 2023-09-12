import { Button, Grid, Image } from "@nextui-org/react";
import style from "@/styles/Navbar.module.css";
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <>
      <Grid.Container className={!isOpen ? style.container : style.second_container} >
        <Image
          className={style.lines}
          src= {!isOpen ? "/assets/images/lines.png" : "/assets/images/x.png"}
          alt="lines Menu"
          containerCss={{ width: "30px", height: "30px", position: "absolute" }}
          onClick={toggleDropdown}
        />
        <Image
          className={style.logo}
          src="/assets/images/logo.png"
          alt="logo icon"
          containerCss={{ width: "131px", height: "34px", position: "absolute" }}
        /> 
        <Image
          className={style.person}
          src="/assets/images/person.png"
          alt="person icon"
          containerCss={{ width: "28px", height: "28px", position: "absolute" }}
        />
        <Image
          className={style.cart}
          src="/assets/images/cart.png"
          alt="shopping car"
          containerCss={{ width: "28px", height: "28px", position: "absolute" }}
        />
        <div className={style.search_container}>
          <input type="search"
            placeholder="¿Qué estás buscando?" 
            className={style.search_input}
          />
          <button type="submit" className={style.search_searchButton}>
            <Image
              className={style.search}
              src="/assets/images/search.png"
              alt="search icon"
              containerCss={{ width: "18px", height: "18px" }}
            />
          </button>
        </div>
      </Grid.Container>

      {isOpen && (
        <Grid
          className={style.nav} 
        >
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
            Preguntas Frecuentes
          </Button>
          <span className={style.nav_underLines}></span>

          <span className={style.span}></span>
          <footer className={style.nav_footer}>
            <Image
              className={style.nav_footer_facebook}
              src= {"/assets/images/facebook.png"}
              alt="lines Menu"
              containerCss={{ width: "38px", height: "38px", position: "absolute" }}
              onClick={toggleDropdown}
            />
            <Image
              className={style.nav_footer_twitter}
              src= {"/assets/images/twitter.png"}
              alt="lines Menu"
              containerCss={{ width: "38px", height: "38px", position: "absolute" }}
              onClick={toggleDropdown}
            />
            <Image
              className={style.nav_footer_instagram}
              src= {"/assets/images/instagram.png"}
              alt="lines Menu"
              containerCss={{ width: "38px", height: "38px", position: "absolute" }}
              onClick={toggleDropdown}
            />
            <Image
              className={style.nav_footer_pinterest}
              src= {"/assets/images/pinterest.png"}
              alt="lines Menu"
              containerCss={{ width: "38px", height: "38px", position: "absolute" }}
              onClick={toggleDropdown}
            />
            <Image
              className={style.nav_footer_linkedin}
              src= {"/assets/images/linkedin.png"}
              alt="lines Menu"
              containerCss={{ width: "38px", height: "38px", position: "absolute" }}
              onClick={toggleDropdown}
            />
          </footer>
        </Grid>     
      )}
    </>
  );
};

export default Navbar;
