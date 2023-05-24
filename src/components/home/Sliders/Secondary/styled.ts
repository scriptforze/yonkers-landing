import { Typography } from "antd";
import Image from "next/image";
import styled from "styled-components";

export const SecondarySliderContainer = styled.section`
  gap: 60px;
  display: flex;
  background: #bcc7dc;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  ${({ theme }) =>
    theme.custom?.breakpoints?.md &&
    `@media (min-width: ${theme.custom?.breakpoints?.md?.min})`} {
    padding: 50px 0px;
  }
`;

export const SecondarySliderImage = styled(Image)`
  width: 59px;
  height: auto;
  object-fit: contain;

  ${({ theme }) =>
    theme.custom?.breakpoints?.md &&
    `@media (min-width: ${theme.custom?.breakpoints?.md?.min})`} {
    width: 68px;
    height: 68px;
  }
`;

export const SecondarySliderItem = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) =>
    theme.custom?.breakpoints?.md &&
    `@media (min-width: ${theme.custom?.breakpoints?.md?.min})`} {
    flex-direction: row;
    gap: 20px;
  }
`;

export const SecondarySliderImageContainer = styled.div`
  display: flex;
  padding: 16px 0 10px 0;
  justify-content: center;
`;

export const SecondarySliderTextContainer = styled.div`
  display: flex;
  padding-bottom: 0;
  flex-direction: column;
  justify-content: center;
`;

export const SecondarySliderTitle = styled(Typography.Title)`
  margin: 0;
  text-align: center;
  align-items: center;
  color: #464646 !important;
  font-size: 18px !important;
  font-weight: bold !important;

  ${({ theme }) =>
    theme.custom?.breakpoints?.md &&
    `@media (min-width: ${theme.custom?.breakpoints?.md?.min})`} {
    text-align: left;
    margin-bottom: 4px !important;
  }
`;

export const SecondarySliderText = styled(Typography.Text)`
  width: 340px;
  color: #212b36;
  font-size: 16px;
  text-align: center;
  align-self: center;
  font-weight: 400;
  margin-bottom: 45px;

  ${({ theme }) =>
    theme.custom?.breakpoints?.md &&
    `@media (min-width: ${theme.custom?.breakpoints?.md?.min})`} {
    text-align: left;
    width: 300px;
  }
`;
