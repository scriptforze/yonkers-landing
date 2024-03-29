import styled from "styled-components";
import { Typography } from "antd";

export const CheckoutConfirmationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CheckoutConfirmationTitle = styled(Typography.Paragraph)`
  font-family: 'Source Sans 3', sans-serif; 
  font-size: 20px;
  font-weight: 600;
  line-height: 0px;
  text-align: center;
  color: #091D47; 
  width: 100%;
`;

export const CheckoutConfirmationLine = styled.div`
  width: 100%;
  border-bottom: solid 0.1em #D3D3D3;
  margin: 14px 0px;
`;

export const CheckoutConfirmationText = styled.p`
  display: inline;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 16px;
  font-weight: ${(props) => props.prefix || "400"};
  color:  ${(props) => props.color || "#000000"};
  width:  ${(props) => props.itemRef || "220px"};
  text-align: ${(props) => props.property || "left"};
`;

export const CheckoutOrderTotal = styled.span`
  display: flex;
  flex-direction: row;  
  justify-content: flex-end;
  gap: 60px;
  width: 100%;
`;

export const CheckoutOrderText = styled.p`
  display: inline;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 16px;
  font-weight: "400;
  color: #000000;
  width: 220px;
  text-align: left;
`;

export const CheckoutOrderSpan = styled.span`
  display: inline;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-align: right;
`;
