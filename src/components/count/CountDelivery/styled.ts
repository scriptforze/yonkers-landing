import styled from "styled-components";
import { Button, Typography, Input } from "antd";

export const CountDeliveryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 60px;
`;

export const CountDeliveryInput = styled(Input)`
  width: 295px;
  height: 40px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #E8E8E8;
  margin-bottom: 20px;
`;

export const CountDeliveryButton = styled(Button)`
  border: none;
  font-size: 16px;
  color: ${({ theme }) => theme.custom?.colors?.white} !important;
  background-color: ${({ theme }) => theme.custom?.colors?.secondary};
  width: 295px;
  height: 39px;
  border-radius: 8px;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const CountDeliveryText = styled(Typography.Paragraph)`
  font-family: 'Source Sans 3', sans-serif; 
  color: ${(props) => props.color || "#999999"};
  font-size: ${(props) => props.results || "14px"};
  font-weight: 400;
  line-height: 0px;
  text-align: left;
  align-self: center;
`;

export const CountDeliveryFooter = styled(Typography.Paragraph)`
  display: flex;
  width: 80%;
  height: 74px;
  flex-direction: column;
  margin-top: 4px;
  position: absolute;

  ${({ theme }) =>
  theme.custom?.breakpoints?.sm &&
  `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    flex-direction: row-reverse;
    left: 40px;
    align-items: center:
    height: 39px;
    justify-content: space-evenly;
  }

  ${({ theme }) =>
  theme.custom?.breakpoints?.lg &&
  `@media (min-width: ${theme.custom?.breakpoints?.lg?.min})`} {
    left: 260px;
  }
`;
