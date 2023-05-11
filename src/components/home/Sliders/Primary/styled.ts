import Image from "next/image";
import styled from "styled-components";
import { Button, Typography } from "antd";

export const PrimarySliderContainer = styled.div`
  width: 100%;
  display: grid;
  background: radial-gradient(
    80.93% 35.79% at 55.2% 29.86%,
    #3e79f7 0%,
    #2852ac 19.47%,
    #214694 37.44%,
    #0f2555 100%
  );

  /* Styles for tablet medium */
  ${({ theme }) =>
    theme.custom?.breakpoints?.md &&
    `@media (min-width: ${theme.custom?.breakpoints?.md?.min})`} {
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    background: radial-gradient(
      50% 169.26% at 68.61% 49.89%,
      #3e79f7 0%,
      #2852ac 19.47%,
      #214694 37.44%,
      #0f2555 100%
    );
  }

  /* Styles for desktop extra large */
  ${({ theme }) =>
    theme.custom?.breakpoints?.xl &&
    `@media (min-width: ${theme.custom?.breakpoints?.xl?.min})`} {
    height: 447px;
  }
`;

export const PrimarySliderImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px 16px 32px 16px;
`;

export const PrimarySliderImage = styled(Image)`
  width: 281px;
  height: auto;
  display: flex;
  justify-self: center;

  /* Styles for desktop extra large */
  ${({ theme }) =>
    theme.custom?.breakpoints?.xl &&
    `@media (min-width: ${theme.custom?.breakpoints?.xl?.min})`} {
    width: 494px;
    height: 359px;
  }
`;

export const PrimarySliderCTAContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 8px;
  padding: 0px 24px 40px;
  flex-direction: column;
  justify-content: center;

  /* Styles for tablet medium */
  ${({ theme }) =>
    theme.custom?.breakpoints?.md &&
    `@media (min-width: ${theme.custom?.breakpoints?.md?.min})`} {
    width: 55%;
  }

  /* Styles for desktop extra large */
  ${({ theme }) =>
    theme.custom?.breakpoints?.xl &&
    `@media (min-width: ${theme.custom?.breakpoints?.xl?.min})`} {
    width: 33%;
  }
`;

export const PrimarySliderCTAText = styled(Typography.Title)`
  font-size: 24px;
  text-align: center;
  align-items: center;
  color: #fafafa !important;
  font-weight: bold !important;
  margin-bottom: 16px !important;

  /* Styles for tablet medium */
  ${({ theme }) =>
    theme.custom?.breakpoints?.md &&
    `@media (min-width: ${theme.custom?.breakpoints?.md?.min})`} {
    text-align: left;
    font-size: 28px !important;
    margin-bottom: 34px !important;
  }

  /* Styles for desktop extra large */
  ${({ theme }) =>
    theme.custom?.breakpoints?.xl &&
    `@media (min-width: ${theme.custom?.breakpoints?.xl?.min})`} {
    text-align: left;
    font-size: 48px !important;
    margin-bottom: 23px !important;
  }
`;

export const PrimarySliderCTAButton = styled(Button)`
  border: none;
  width: 194px;
  height: 40px;
  color: #fafafa;
  font-size: 18px;
  border-radius: 4px;
  align-self: center;
  background-color: #fe7062;

  /* Styles for table medium */
  ${({ theme }) =>
    theme.custom?.breakpoints?.md &&
    `@media (min-width: ${theme.custom?.breakpoints?.md?.min})`} {
    align-self: flex-start;
  }
`;
