import { Button } from "antd";
import Image from "next/image";
import styled from "styled-components";

export const CustomImage = styled(Image)`
  width: 151px;
  height: auto;
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
  background: linear-gradient(
    180deg,
    rgba(62, 121, 247, 0.65) 0%,
    #3e79f7 53.12%,
    #3e79f7 100%
  );
  width: 100%;
  height: 60px;
  display: flex;
  padding: 0px 16px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
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

export const MenuItemsContainer = styled.nav`
  display: flex;
  font-size: 16px;
  flex-direction: row;
  justify-content: center;
  background-color: #d4d7da;
`;

export const MenuItemButton = styled(Button).attrs(() => ({
  ghost: true,
}))`
  border: none;
  font-size: 16px;
  font-weight: normal;
  & > span {
    color: #464646;
    letter-spacing: 0.04em;
  }
`;
