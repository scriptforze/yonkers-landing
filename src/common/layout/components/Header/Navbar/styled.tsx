import { Button } from "antd";
import Image from "next/image";
import styled from "styled-components";

export const CustomImage = styled(Image)`
  width: 151px;
  height: auto;

  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    width: 240px;
  }
`;

export const CustomControlButton = styled(Button).attrs(() => ({
  ghost: true,
  shape: "circle",
}))`
  border: none;
  color: #fff;

  & > .anticon {
    color: #fff;
    font-size: 24px;
  }
`;

export const NavbarContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const SuperiorNavbar = styled.div`
  gap: 12px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background: ${({ theme }) => theme.custom?.colors?.primary};

  ${({ theme }) =>
    theme.custom?.breakpoints?.lg &&
    `@media (min-width: ${theme.custom?.breakpoints?.lg?.min})`} {
    gap: 50px;
  }
`;

export const MenuLogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  & > .menu-button {
    margin-right: 9px;
  }
`;

export const NavbarControlsContainer = styled.div`
  gap: 17px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderContainerNav = styled.header`
  gap: 12px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background: ${({ theme }) => theme.custom?.colors?.footer};

  ${({ theme }) =>
    theme.custom?.breakpoints?.lg &&
    `@media (min-width: ${theme.custom?.breakpoints?.lg?.min})`} {
    gap: 50px;
  }
`;
