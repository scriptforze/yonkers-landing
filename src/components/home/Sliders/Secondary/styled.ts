import { Typography } from "antd";
import styled from "styled-components";

export const SecondarySliderContainer = styled.div`
  width: 100%;
  display: flex;
  background: #bcc7dc;
  flex-direction: column;
  justify-content: center;
`;

export const SecondarySliderImageContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 16px 0 10px 0;
  justify-content: center;
`;

export const SecondarySliderTextContainer = styled.div`
  width: 100%;
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
  font-weight: bold !important;
`;

export const SecondarySliderText = styled(Typography.Text)`
  width: 340px;
  color: #616161;
  font-size: 18px;
  text-align: center;
  align-self: center;
  font-weight: normal;
  margin-bottom: 45px;
`;
