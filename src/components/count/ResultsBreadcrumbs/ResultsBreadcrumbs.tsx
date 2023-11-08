import React, { useState } from "react";
import { BreadcrumbsContainer,
   CountNav,
   CountText,
   CountButton,
   CountSection } from "./styled";
import { CountForm } from "../CountForm";
import { CountDeliveryForm } from "../CountDeliveryForm";
import { CountDelivery } from "../CountDelivery";
import { CountOrder } from "../CountOrder";
import { CountPaymentForm } from "../CountPaymentForm";
import { CountPayment } from "../CountPayment";
import { Props } from "./types";

const ResultsBreadcrumbs = ({ product }: Props) => {
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

  const [dataFromChild, setDataFromChild] = useState<boolean>();

  const handleDataFromChild = (data: boolean) => {
    setDataFromChild(data);
  }

  return (
    <BreadcrumbsContainer>
      <CountNav>
        <CountButton onClick={() => openTag('cuenta')}>
          <CountText className="tablink" color={activeTag === "cuenta" ? "#FE7062" : "#212B36"}>
            Mi cuenta
          </CountText>
        </CountButton>
        <CountButton onClick={() => openTag('envio')}>
          <CountText className="tablink" color={activeTag === "envio" ? "#FE7062" : "#212B36"}>
            Direcciones de envío
          </CountText>
        </CountButton>
        <CountButton onClick={() => openTag('pedido')}>
          <CountText color={activeTag === "pedido" ? "#FE7062" : "#212B36"}>
            Pedidos
          </CountText>
        </CountButton>
        <CountButton onClick={() => openTag('pago')}>
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
          {dataFromChild === true ? <CountDeliveryForm onDataFromChild={handleDataFromChild}/> :
          <CountDelivery onDataFromChild={handleDataFromChild}/>
          }
        </div>
        <div id="pedido" className="tag" style={{ display: 'none' }}>
          <CountOrder product={product} />
        </div>
        <div id="pago" className="tag" style={{ display: 'none' }}>
          {dataFromChild === true ? <CountPaymentForm onDataFromChild={handleDataFromChild}/> :
            <CountPayment onDataFromChild={handleDataFromChild}/>
          }
        </div>
      </CountSection>
    </BreadcrumbsContainer>
  );
}

export default ResultsBreadcrumbs;
