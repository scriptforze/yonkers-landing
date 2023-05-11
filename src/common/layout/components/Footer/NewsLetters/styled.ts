import { Button, Input, Typography } from "antd";
import styled from "styled-components";

export const NewsLettersContainer = styled.section`
  width: 340px;
  align-self: center;
  padding-bottom: 76px;
`;

export const NewsLettersTitle = styled(Typography.Title).attrs(() => ({
  level: 4,
}))`
  line-height: 40px;
  color: #fafafa !important;
  font-size: 16px !important;
  text-decoration: underline;
  font-weight: 700 !important;
  margin-bottom: 20px !important;
`;

export const NewsLettersText = styled(Typography.Paragraph)`
  color: #fafafa;
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
`;

export const NewsLettersInput = styled(Input)`
  width: 100%;
  height: 48px;
  font-size: normal;
  border-radius: 4px;
  padding: 13px 115px 15px 13px;
`;

export const NewsLettersButton = styled(Button)`
  width: 100%;
  height: 48px;
  border: none;
  font-size: 16px;
  margin-top: 16px;
  font-weight: bold;
  border-radius: 4px;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.custom?.colors?.white} !important;
  background-color: ${({ theme }) => theme.custom?.colors?.secondary};
`;
