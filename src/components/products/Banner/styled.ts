import Image from "next/image";
import { Typography } from "antd";
import styled from "styled-components";

export const BannerContainer = styled.section`
  height: 74px;
  position: relative;
  background: #091d47;
`;

export const BannerImage = styled(Image)`
  width: 100%;
  height: auto;
  opacity: 50%;
  position: absolute;
  object-fit: cover;
  max-height: 74px;
`;

export const BannerText = styled(Typography.Title)`
  color: #ffffff !important;
  font-size: 24px;
  font-weight: bold;
  line-height: 30px;
  text-align: center;
  position: relative;
`;
