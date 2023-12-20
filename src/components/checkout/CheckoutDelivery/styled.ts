import styled from "styled-components";
import { Typography } from "antd";

export const CheckoutDeliveryContainer = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-columns: repeat(
    auto-fill,
    minmax(295px, 1fr)
  );
  max-width: 1048px;
  flex-wrap: wrap;
  gap: 20px 40px;
`;

export const CheckoutText = styled(Typography.Paragraph)`
  font-family: 'Source Sans 3', sans-serif; 
  font-size: 20px;
  font-weight: 600;
  line-height: 0px;
  text-align: center;
  color: #091D47;
`;
