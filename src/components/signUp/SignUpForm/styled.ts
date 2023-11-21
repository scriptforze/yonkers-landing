import styled from "styled-components";
import { Button, Typography, Input } from "antd";

export const SignUpFormInput = styled(Input)`
  width: 300px;
  height: 40px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #E8E8E8;
  color: #212B36;
  margin: 0px 0px 20px 0px;

  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
      margin: 0px 0px 20px 0px;
  }
`;

export const SignUpFormButton = styled(Button)`
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
  }
`;

export const SignUpFormText = styled(Typography.Paragraph)`
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

export const SignUpFormTextSub = styled(Typography.Paragraph)`
  color: ${(props) => props.color || "#212B36"};
  font-size: 16px;
  font-weight: 400;
  text-align: right; 
  line-height: 48px;
  cursor: pointer;
  width: 150px;
  margin: 0px 0px 0px 140px;

  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
      margin: -50px 0px 0px auto;
  }
 `;
