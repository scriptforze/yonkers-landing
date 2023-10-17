import styled from "styled-components";
import { Button, Typography, Input } from "antd";

export const CountFormInput = styled(Input)`
  width: 300px;
  height: 40px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #E8E8E8;
  color: #212B36;
`;

export const CountFormButton = styled(Button)`
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.custom?.colors?.white} !important;
  background-color: ${({ theme }) => theme.custom?.colors?.secondary};
  width: 83px;
  height: 39px;
  border-radius: 8px;
  position: relative;
  left: 40%;

  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
      left: 84%;
  }

  ${({ theme }) =>
    theme.custom?.breakpoints?.md &&
    `@media (min-width: ${theme.custom?.breakpoints?.md?.min})`} {
      left: 88%;
  }

  ${({ theme }) =>
    theme.custom?.breakpoints?.lg &&
    `@media (min-width: ${theme.custom?.breakpoints?.lg?.min})`} {
      left: 87%;
  }

  ${({ theme }) =>
    theme.custom?.breakpoints?.xl &&
    `@media (min-width: ${theme.custom?.breakpoints?.xl?.min})`} {
      left: 91%;
  }

  ${({ theme }) =>
    theme.custom?.breakpoints?.xxl &&
    `@media (min-width: ${theme.custom?.breakpoints?.xxl?.min})`} {
      left: 93%;
  }x
`;

export const CountFormText = styled(Typography.Paragraph)`
  font-family: 'Source Sans 3', sans-serif; 
  color: #999999;
  font-size: 14px;
  font-weight: 400;
  line-height: 6px;
  text-align: left; 

  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
      line-height: 0px;
  }
`;

export const CountLine = styled.div`
  border-top: 1px solid #D3D3D3;
  width: 100%;
  margin: 20px 0; 

  
`;

export const CountFormTextSub = styled(Typography.Paragraph)`
  color: ${(props) => props.color || "#212B36"};
  font-size: 16px;
  font-weight: 400;
  text-align: right; 
  line-height: 48px;
  
  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
      margin: -30px 0px;
  }
 `;
