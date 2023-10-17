import styled from "styled-components";
import { Button, Typography, Input } from "antd";

export const CountFormInput = styled(Input)`
  width: 100%;
  font-size: normal;
  border-rCountForm;
  padding: 13px 115px 15px 13px;
  width: Fixed (300px);
  height: Hug (55px);
  gap: 6px;
  placeholder: ${(props) => props.color || ""};
`;

export const CountFormButton = styled(Button)`
  border: none;
  font-size: 16px;
  margin-top: 16px;
  font-weight: bold;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.custom?.colors?.white} !important;
  background-color: ${({ theme }) => theme.custom?.colors?.secondary};
  width: Hug (83px);
  height: Hug (39px);
  padding: 14px, 20px, 14px, 20px;
  border-radius: 8px;
  gap: 10px;
`;

export const CountFormText = styled(Typography.Paragraph)`
  color: #999999;
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  width: Fixed (300px);
  height: Hug (55px);
  gap: 6px;
`;
