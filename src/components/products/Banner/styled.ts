import Image from "next/image";
import { Typography } from "antd";
import styled from "styled-components";

export const BannerContainer = styled.section`
  height: 74px;
  display: flex;
  position: relative;
  align-items: center;
  background: #091d47;
  justify-content: center;

  ${({ theme }) =>
    theme.custom?.breakpoints?.lg &&
    `@media (min-width: ${theme.custom?.breakpoints?.lg?.min})`} {
    height: 182px;
  }
`;

export const BannerImage = styled(Image)`
  width: 100%;
  height: auto;
  opacity: 50%;
  position: absolute;
  object-fit: cover;
  max-height: 74px;

  ${({ theme }) =>
    theme.custom?.breakpoints?.lg &&
    `@media (min-width: ${theme.custom?.breakpoints?.lg?.min})`} {
    max-height: 182px;
  }
`;

export const BannerText = styled(Typography.Title)`
  font-size: 24px;
  font-weight: bold;
  line-height: 30px;
  text-align: center;
  position: relative;
  color: #ffffff !important;

  ${({ theme }) =>
    theme.custom?.breakpoints?.lg &&
    `@media (min-width: ${theme.custom?.breakpoints?.lg?.min})`} {
    font-size: 48px !important;
  }
`;
