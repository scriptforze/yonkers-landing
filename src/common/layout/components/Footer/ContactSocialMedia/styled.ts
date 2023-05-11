import { Typography } from "antd";
import styled from "styled-components";

export const ContactSocialMediaContainer = styled.section`
  gap: 22px;
  display: flex;
  padding: 0px 14px;
  padding-top: 34px;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid #172d5e;
`;

export const CopyRightText = styled(Typography.Text)`
  display: flex;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.custom?.colors?.white};
`;

export const SocialMedia = styled.div`
  gap: 19px;
  display: flex;
  direction: row;
  justify-content: space-around;
`;
