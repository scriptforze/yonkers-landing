import Image from "next/image";
import { Typography, Button } from "antd";
import styled from "styled-components";

export const ContactContainerInformationSent = styled.section`
  height: 400px;
  display: grid;
  grid-template-rows: 4fr;
  grid-template-areas: 
    "image"
    "tittle"
    "text"
    "button";
  justify-items: center;
  margin: 80px 0px;
  padding: 0px 16.5px;
  align-content: center;
  justify-content: center;
  align-items: center;

  ${({ theme }) =>
    theme.custom?.breakpoints?.lg &&
    `@media (min-width: ${theme.custom?.breakpoints?.lg?.min})`} {
      grid-template-rows: repeat(3, 70px);;
      grid-template-columns: repeat(2, 470px);
      grid-template-areas: 
        "image tittle"
        ". text"
        ". button";
  }
`;

export const ContactTextImage = styled(Image)`
  position: relative;
  width: 115px;
  height: 115px;
  grid-area: image;
  

  ${({ theme }) =>
  theme.custom?.breakpoints?.lg &&
  `@media (min-width: ${theme.custom?.breakpoints?.lg?.min})`} {
    top: 25px;
  }
`;

export const ContactTextTittleInformationSent = styled(Typography.Paragraph)`
  font-family: 'Source Sans 3', sans-serif; 
  color: #172D5E;
  font-size: 32px;
  font-weight: 600;
  line-height: 41px;
  text-align: center;
  grid-area: tittle;

  ${({ theme }) =>
  theme.custom?.breakpoints?.lg &&
  `@media (min-width: ${theme.custom?.breakpoints?.lg?.min})`} {
    width: 470px;
  }
`;

export const ContactTextInformationSent = styled(Typography.Paragraph)`
  font-family: 'Source Sans 3', sans-serif; 
  color: #999999;
  font-size: 20px;
  font-weight: 400;
  line-height: 25.14px;
  text-align: center;
  grid-area: text;
`;

export const ButtonContainer = styled.section`
  grid-area: button;
`;

export const ContactButtonInformationSent = styled(Button)`
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.custom?.colors?.white} !important;
  background-color: ${({ theme }) => theme.custom?.colors?.secondary};
  width: 343px;
  height: 40px;
  border-radius: 4px;
  padding: 10px 40px 10px 40px;

  ${({ theme }) =>
    theme.custom?.breakpoints?.lg &&
    `@media (min-width: ${theme.custom?.breakpoints?.lg?.min})`} {
      width: 148px;
  }
`;