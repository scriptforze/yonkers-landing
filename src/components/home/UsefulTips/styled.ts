import { Button, Typography } from "antd";
import Image from "next/image";
import styled from "styled-components";

export const UsefulTipsContainer = styled.section`
  display: flex;
  margin-top: 37px;
  padding: 32px 16px;
  flex-direction: column;
`;

export const UsefulTipsTitle = styled(Typography.Title).attrs(() => ({
  level: 3,
}))`
  text-align: left;
  margin-bottom: 24px;
  color: #172d5e !important;
  font-weight: 600 !important;
`;

export const UsefulTipsCardsContainer = styled.div`
  display: grid;
  grid-gap: 25px;
  padding: 0px 25px;
  justify-items: center;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 343px), 343px));
`;

export const UsefulTipCard = styled.div`
  width: 343px;
  height: 226px;
  position: relative;
`;

export const UsefulTipCardImage = styled(Image).attrs(() => ({
  width: 100,
  height: 100,
}))`
  width: 100%;
  height: auto;
  position: absolute;
  border-radius: 8px;
`;

export const UsefulTipCardTextContainer = styled.div`
  height: 226px;
  padding: 16px;
  display: flex;
  position: absolute;
  border-radius: 8px;
  flex-direction: column;
  background: rgba(28, 37, 54, 0.8);
`;

export const UsefulTipCardTextTitle = styled(Typography.Title).attrs(() => ({
  level: 3,
}))`
  color: #e6e6e6 !important;
  font-size: 22px !important;
  font-weight: 600 !important;
  margin-bottom: 24px !important;
`;

export const UsefulTipCardTextDescription = styled(Typography.Text)`
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 10px;
  color: #e6e6e6 !important;
`;

export const UsefulTipCardTextCTAButton = styled(Button).attrs(() => ({
  type: "link",
}))`
  display: flex;
  color: #e6e6e6;
  font-size: 20px;
  flex-direction: row;
  align-self: flex-end;
`;
