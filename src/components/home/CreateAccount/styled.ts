import styled from "styled-components";
import { Button, Typography } from "antd";
import Image from "next/image";

export const CreateAccountContainer = styled.section`
  display: flex;
  padding: 16px 19px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.custom?.colors?.white};

  ${({ theme }) =>
    theme.custom?.breakpoints?.xl &&
    `@media (min-width: ${theme.custom?.breakpoints?.xl?.min})`} {
    gap: 80px;
    padding: 70px 120px;
    flex-direction: row;
    justify-content: center;
  }
`;

export const CreateAccountTitle = styled(Typography.Title).attrs(() => ({
  level: 3,
}))`
  text-align: center;
  color: #0f2555 !important;
  font-size: 24px !important;
  font-weight: 600 !important;

  ${({ theme }) =>
    theme.custom?.breakpoints?.xl &&
    `@media (min-width: ${theme.custom?.breakpoints?.xl?.min})`} {
    width: 338px;
    text-align: left;
    font-size: 18px !important;
  }
`;

export const UnorderedList = styled.ul`
  list-style-type: circle;
`;

export const ListItem = styled.li``;
export const ListItemText = styled(Typography.Text)`
  color: #0f2555;
  font-size: 16px;
  font-weight: 300;
`;

export const CTAButton = styled(Button)`
  border: none;
  height: 40px;
  font-weight: 600;
  border-radius: 4px;
  margin-bottom: 27px;
  color: white !important;
  background-color: ${({ theme }) => theme.custom?.colors?.secondary};
`;

export const DisclaimerText = styled(Typography.Text)`
  font-size: 16px;
  font-weight: 300;
  color: #0f255599;
  font-style: italic;
  text-align: center;
`;

export const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) =>
    theme.custom?.breakpoints?.xl &&
    `@media (min-width: ${theme.custom?.breakpoints?.xl?.min})`} {
    width: 400px;
    align-self: flex-start;
  }
`;

export const CreateAccountImage = styled(Image)`
  width: 564px;
  height: auto;
`;
