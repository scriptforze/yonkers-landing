import React from "react";
import { BreadcrumbsContainer,
   CountNav,
   CountText,
   CountButton,
   CountSection } from "./styled";
import { CountForm } from "../CountForm";
import { CountDelivery } from "../CountDelivery";
import { CountOrder } from "../CountOrder";
import { CountPayment } from "../CountPayment";
import { useState } from 'react';

const ResultsBreadcrumbs = () => {
  const [activeTag, setActiveTag] = useState("cuenta");

  function openTag(tagName: string) {
    var i, tagDisplay, tablinks;
    tagDisplay = document.getElementsByClassName("tag");
    for (i = 0; i < tagDisplay.length; i++) {
      (tagDisplay[i] as HTMLElement).style.display = "none";
    }

    setActiveTag(tagName);
    tablinks = document.getElementsByClassName("tablink");
    (document.getElementById(tagName) as HTMLElement).style.display = "block";
  }
  return (
    <BreadcrumbsContainer>
      <CountNav>
        <CountButton onClick={() => openTag('cuenta')}
        >
          <CountText className="tablink" color={activeTag === "cuenta" ? "#FE7062" : "#212B36"}>
            Mi cuenta
          </CountText>
        </CountButton>
        <CountButton onClick={() => openTag('envio')}
        >
          <CountText className="tablink" color={activeTag === "envio" ? "#FE7062" : "#212B36"}>
            Direcciones de envío
          </CountText>
        </CountButton>
        <CountButton onClick={() => openTag('pedido')}
        >
          <CountText color={activeTag === "pedido" ? "#FE7062" : "#212B36"}>
            Pedidos
          </CountText>
        </CountButton>
        <CountButton onClick={() => openTag('pago')}
        >
          <CountText color={activeTag === "pago" ? "#FE7062" : "#212B36"}>
            Métodos de pago
          </CountText>
        </CountButton>
      </CountNav>
      <CountSection>
        <div id="cuenta" className="tag">
          <CountForm />
        </div>
        <div id="envio" className="tag" style={{ display: 'none' }}>
          <CountDelivery />
        </div>
        <div id="pedido" className="tag" style={{ display: 'none' }}>
          <CountOrder />
        </div>
        <div id="pago" className="tag" style={{ display: 'none' }}>
          <CountPayment />
        </div>
      </CountSection>
    </BreadcrumbsContainer>
  );
}

export default ResultsBreadcrumbs;
