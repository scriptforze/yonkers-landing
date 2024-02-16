import { Button, Typography } from "antd";
import Link from "next/link";
import styled from "styled-components";

export const MenuContainer = styled.nav`
  display: flex;
  padding: 9px 16px;
  flex-direction: row;
  border-top: 1px solid #205ee2;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.custom?.colors?.primary};

  ${({ theme }) =>
    theme.custom?.breakpoints?.lg &&
    `@media (min-width: ${theme.custom?.breakpoints?.lg?.min})`} {
    padding: 9px 118px;
  }
`;

export const MenuItemsContainer = styled.div`
  gap: 36px;
  display: flex;
  font-size: 16px;
`;

export const MenuItemButton = styled(Link).attrs(() => ({
  type: "link",
}))`
  padding: 0px;
  border: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: normal;
  & > span {
    color: #ffffff;
    font-weight: 400;
    letter-spacing: 0.04em;
  }
`;

export const ContactTextContainer = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
`;

export const ContactText = styled(Typography.Text)`
  color: #ffffff;
  font-size: 15px;
  font-weight: 400;
`;
