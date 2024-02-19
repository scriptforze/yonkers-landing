import React, { useState } from "react";
import {
  CheckoutMainContainer,
  CheckoutMainNav,
  CheckoutMainText,
  CheckoutMainLine,
  CheckoutMainLineProgress,
  CheckoutMainSection,
  CheckoutMainButtonContainer,
  ButtonText,
  ButtonButton
} from "./styled";
import { CheckoutMainProps } from "./types";
import { CheckoutPay } from "../CheckoutPay";
import { CheckoutDeliveryForm } from "../CheckoutDeliveryForm";
import { CheckoutDelivery } from "../CheckoutDelivery";
import { CheckoutCar } from "../CheckoutCar";
import { CheckoutConfirmation } from "../CheckoutConfirmation";
import { ContactInformationSent } from "@/components/contact/ContactInformationSent";

const CheckoutMain = ({ product }: CheckoutMainProps) => {

  const nameButton = [
    "Dirección de envío",
    "Método de pago",
    "Ir a pagar",
    "Confirmar orden",
    "Rastrear Orden"
  ];

  const changeDisplay = [
    "carrito",
    "envio",
    "pago",
    "confirmacion",
    "recibido"
  ];

  const [activeTag, setActiveTag] = useState("carrito");
  const [deactivate, setDeactivateTag] = useState("confirmacion");
  const [charge, setCharge] = useState(0);
  const [name, setName] = useState(0);
  const [change, setChange] = useState(1);

  function openTag(tagName: string) {
    var tagDisplay = document.getElementsByClassName("tag");
    for (var i = 0; i < tagDisplay.length; i++) {
      (tagDisplay[i] as HTMLElement).style.display = "none";
    }
    setActiveTag(tagName);
    (document.getElementById(tagName) as HTMLElement).style.display = "block";
    charge <= 66 ? setCharge(charge + 33) : setCharge(charge - charge);
    setName((prevIndex) => (prevIndex + 1) % nameButton.length);
    setChange((changeIndex) => (changeIndex + 1) % changeDisplay.length);
  }
  const [dataFromChild, setDataFromChild] = useState<boolean>();
  const handleDataFromChild = (data: boolean) => {
    setDataFromChild(data);
  }

  function reverseTag(tagName: string) {
    var tagDisplay = document.getElementsByClassName("tag");
    (tagDisplay[change - 1] as HTMLElement).style.display = "none";
    (tagDisplay[change - 2] as HTMLElement).style.display = "block";
    setDeactivateTag(tagName);
    charge <= 99 ? setCharge(charge - 33) : setCharge(charge - charge);
    setName((prevIndex) => (prevIndex - 1) % nameButton.length);
    setChange((changeIndex) => (changeIndex - 1) % changeDisplay.length);
  }

  return (
    <CheckoutMainContainer>
      {activeTag === "recibido" ? (
        ""
      ) : (
        <>
          <CheckoutMainLine>
            <CheckoutMainLineProgress borderProps={`${charge}%`} />
          </CheckoutMainLine>
          <CheckoutMainNav>
            <CheckoutMainText
              colorProps={
                activeTag === "carrito" ||
                  activeTag === "envio" ||
                  activeTag === "pago" ||
                  activeTag === "confirmacion" ? "#FE7062" : "#C4CDD5"
              }
              fontColorProps={
                activeTag === "carrito" ||
                  activeTag === "envio" ||
                  activeTag === "pago" ||
                  activeTag === "confirmacion" ? "#FFFFFF" : "#999999"
              }
            >
              1
            </CheckoutMainText>
            <CheckoutMainText
              colorProps={
                activeTag === "envio" ||
                  activeTag === "pago" ||
                  activeTag === "confirmacion" ? "#FE7062" : "#C4CDD5"
              }
              fontColorProps={
                activeTag === "envio" ||
                  activeTag === "pago" ||
                  activeTag === "confirmacion" ? "#FFFFFF" : "#999999"
              }
            >
              2
            </CheckoutMainText>
            <CheckoutMainText
              colorProps={
                activeTag === "pago" ||
                  activeTag === "confirmacion" ? "#FE7062" : "#C4CDD5"
              }
              fontColorProps={
                activeTag === "pago" ||
                  activeTag === "confirmacion" ? "#FFFFFF" : "#999999"
                    ||
                    deactivate === "pago" ||
                    deactivate === "confirmacion" ? "#999999" : "#FFFFFF"
              }
            >
              3
            </CheckoutMainText>
            <CheckoutMainText
              colorProps={
                activeTag === "confirmacion"
                  ? "#FE7062"
                  : "#C4CDD5"
              }
              fontColorProps={
                activeTag === "confirmacion"
                  ? "#FFFFFF"
                  : "#999999"
              }
            >
              4
            </CheckoutMainText>
          </CheckoutMainNav>
        </>
      )}
      <CheckoutMainSection>
        <div id="carrito" className="tag">
          <CheckoutCar />
        </div>
        <div id="envio" className="tag" style={{ display: 'none' }}>
          {dataFromChild === true ?
            <CheckoutDeliveryForm onDataFromChild={handleDataFromChild} /> :
            <CheckoutDelivery onDataFromChild={handleDataFromChild} />
          }
        </div>
        <div id="pago" className="tag" style={{ display: 'none' }}>
          <CheckoutPay />
        </div>
        <div id="confirmacion" className="tag" style={{ display: 'none' }}>
          <CheckoutConfirmation onDataFromChild={handleDataFromChild} />
        </div>
        <div id="recibido" className="tag" style={{ display: 'none' }}>
          <ContactInformationSent appear={"false"} />
        </div>
      </CheckoutMainSection>
      <CheckoutMainButtonContainer>
        <ButtonButton onClick={() => openTag(`${changeDisplay[change]}`)}>
          {nameButton[name]}
        </ButtonButton>
        <ButtonText
          wildcardProps={`${change === 1 ? "none" : ""}`}
          onClick={() => reverseTag(`${changeDisplay[change]}`)}
        >
          Volver
        </ButtonText>
      </CheckoutMainButtonContainer>
    </CheckoutMainContainer>
  );
}

export default CheckoutMain;
