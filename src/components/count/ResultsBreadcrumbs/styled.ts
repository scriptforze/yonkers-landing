import styled from "styled-components";
import { Button, Typography } from "antd";

export const BreadcrumbsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  align-items: center;

  ${({ theme }) =>
    theme.custom?.breakpoints?.lg &&
    `@media (min-width: ${theme.custom?.breakpoints?.lg?.min})`} {
      flex-direction: row;
      align-items: flex-start;
      height: 100%;
      padding: 20px 20px;
      gap: 24px;
  }

  ${({ theme }) =>
    theme.custom?.breakpoints?.xxl &&
    `@media (min-width: ${theme.custom?.breakpoints?.xxl?.min})`} {
      padding: 20px 120px;
  }
`;

export const CountNav = styled.div`
  display: flex;
  width: 100%;
  overflow-y: hidden;
  padding: 20px 0px 0px 32px;
  height: 55px;
  margin-bottom: 16px;

  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
      width: 560px;
      overflow: hidden;
  }

  ${({ theme }) =>
    theme.custom?.breakpoints?.lg &&
    `@media (min-width: ${theme.custom?.breakpoints?.lg?.min})`} {
      width: 231px;
      height: 178px;
      padding: 20px;
      gap: 30px;
      flex-direction: column;
      align-items: flex-start;
  }
`;

export const CountSection = styled.div`
  padding: 32px 20px;
  border-radius: 8px; 
  background-color: #FFFFFF;
  width: 100%;
  height: 100%;
  
  ${({ theme }) =>
    theme.custom?.breakpoints?.lg &&
    `@media (min-width: ${theme.custom?.breakpoints?.lg?.min})`} {
      width: 70%;
  }

  ${({ theme }) =>
    theme.custom?.breakpoints?.xxl &&
    `@media (min-width: ${theme.custom?.breakpoints?.xxl?.min})`} {
      width: 100%;
      margin: 0px 120px;
  }
`;

export const CountText = styled(Typography.Paragraph)`
  color: ${(props) => (props.color ? props.color : '#212B36')};
    font-size: 16px;
    font-weight: 600;
    line-height: 27px;
    text-align: center;
  }
`;

export const CountButton = styled(Button)`
  height: 11px;
  border: none;
  background-color: #e8e8e8;
`;
