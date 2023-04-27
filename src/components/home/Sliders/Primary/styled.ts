import Image from "next/image";
import styled from "styled-components";
import { Button, Typography } from "antd";

export const PrimarySliderContainer = styled.div`
  width: 100%;
  background: radial-gradient(
    80.93% 35.79% at 55.2% 29.86%,
    #3e79f7 0%,
    #2852ac 19.47%,
    #214694 37.44%,
    #0f2555 100%
  );
`;

export const PrimarySliderImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const PrimarySliderImage = styled(Image)`
  width: 281px;
  height: auto;
  padding: 32px 16px 32px 16px;
`;

export const PrimarySliderCTAContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 8px;
  padding: 0px 24px 40px;
  flex-direction: column;
  justify-content: center;
`;

export const PrimarySliderCTAText = styled(Typography.Title)`
  font-size: 24px;
  text-align: center;
  align-items: center;
  margin-bottom: 16px;
  color: #fafafa !important;
  font-weight: bold !important;
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
`;
