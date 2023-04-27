import { Button, Typography } from "antd";
import Image from "next/image";
import styled from "styled-components";

export const OffersDiscountsContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const OffersDiscountsTextContainer = styled.div`
  padding: 0px 16px;
  text-align: center;
  align-items: center;
  margin-bottom: 65px;
`;

export const OffersDiscountsTextTitle = styled(Typography.Title).attrs(() => ({
  level: 3,
}))`
  margin-bottom: 0px;
  padding: 32px 52px 16px;
  font-weight: 600 !important;
`;

export const OffersDiscountsTextDescription = styled(Typography.Text)`
  font-size: 18px;
  font-weight: 300;
`;

export const OffersDiscountsCardsContainer = styled.div`
  display: grid;
  grid-gap: 25px;
  padding: 0px 25px;
  justify-items: center;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 343px), 343px));
`;

export const OffersDiscountsCard = styled.div`
  width: 343px;
  height: 302px;
  position: relative;
`;

export const OffersDiscountsCardImage = styled(Image).attrs(() => ({
  width: 100,
  height: 100,
}))`
  width: 100%;
  height: auto;
  position: absolute;
  border-radius: 8px;
`;

export const OffersDiscountsCardTextContainer = styled.div`
  height: 302px;
  padding: 16px;
  display: flex;
  position: absolute;
  border-radius: 8px;
  flex-direction: column;
  background: rgba(28, 37, 54, 0.8);
`;

export const OffersDiscountsCardTextTitle = styled(Typography.Title).attrs(
  () => ({
    level: 2,
  })
)`
  color: #e6e6e6 !important;
  font-size: 28px !important;
  font-weight: bold !important;
  margin-bottom: 24px !important;
`;

export const OffersDiscountsCardTextSubtitle = styled(Typography.Title).attrs(
  () => ({
    level: 3,
  })
)`
  color: #e6e6e6 !important;
  font-weight: 600 !important;
  margin: 0px 0px 10px !important;
`;

export const OffersDiscountsCardTextDescription = styled(Typography.Text)`
  color: #e6e6e6;
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 40px;
`;

export const OffersDiscountsCardTextCTAButton = styled(Button)`
  height: 36px;
  width: 269px;
  color: #252525;
  font-size: 16px;
  font-weight: 600;
  align-self: center;
  border-radius: 4px;
  background-color: rgba(232, 232, 232, 1);
`;
