import styled from "styled-components";
import { Typography, Input } from "antd";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 295px;

  ${({ theme }) =>
  theme.custom?.breakpoints?.sm &&
  `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    width:100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
`;

export const CheckoutLine = styled.div`
  width: 100%;
  border-bottom: solid 0.1em #D3D3D3;
  margin: 16px 0px;
`;

export const CheckoutImageConatainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CheckoutPayText = styled(Typography.Paragraph)`
  font-family: 'Source Sans 3', sans-serif; 
  color: #989D9E;
  font-weight: 400;
  line-height: 27px;
  width: 145px;
  display: inline-block;
  font-size: 16px;
  position: relative;
  left: 15px;
`;

export const CheckoutPayTextPay = styled(Typography.Paragraph)`
  font-family: 'Source Sans 3', sans-serif; 
  font-size: 20px;
  font-weight: 600;
  line-height: 0px;
  text-align: center;
  color: #091D47; 
  width: 100%;
`;

export const CheckoutPayRadius = styled(Input)`
  position: relative;
  top: 8px;
  width: 12.11px;
  height: 12.11px;
`;