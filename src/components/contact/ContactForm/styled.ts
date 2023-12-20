import styled, { DefaultTheme, ThemedStyledProps } from "styled-components";
import { Button, Typography, Input, Checkbox } from "antd";
import { Props } from "@/common/types";

export const ContactFormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 60px 40px 60px 40px;
  border-radius: 20px;
  gap: 35px;
  background-color: white;
  box-shadow: 4px 4px 35px 0px #00000026;
  margin-bottom: 35px;
  
  ${({ theme }) =>
  theme.custom?.breakpoints?.sm &&
  `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    padding: 40px;
    height: 100%;
    margin: -60px 0px -30px 0px;
    max-width: 95%;
  }

  ${({ theme }) =>
  theme.custom?.breakpoints?.lg &&
  `@media (min-width: ${theme.custom?.breakpoints?.lg?.min})`} {
    width: 100%;
  }
`;

export const FilterCheckBox = styled(Checkbox)`
  color: #212b36;
  font-size: 16px;
  font-weight: 400;
  padding: 5px 0px;

  margin-inline-start: 0px !important;
`;

export const FiltersCheckboxesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactFormInput = styled(Input)`
  height: 40px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #E8E8E8;
  margin-bottom: 20px;

  ${({ theme }) =>
  theme.custom?.breakpoints?.sm &&
  `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    min-width: 472px;
  }
`;


export const ContactFormTextArea = styled(Input)`
  height: 40px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #E8E8E8;
  margin-bottom: 20px;
  height: 82px;

  ${({ theme }) =>
  theme.custom?.breakpoints?.sm &&
  `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    margin-bottom: 35px;
  }
`;

export const ContactFormButton = styled(Button)`
  display: flex;
  justify-content: center;
  border: none;
  font-size: 16px;
  color: ${({ theme }) => theme.custom?.colors?.white} !important;
  background-color: ${({ theme }) => theme.custom?.colors?.secondary};
  width: 253px;
  height: 39px;
  border-radius: 8px;
  font-weight: 700;
  margin: 24px auto; 

  ${({ theme }) =>
  theme.custom?.breakpoints?.sm &&
  `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    width: 161px;
    position: relative;
    align-self: right;
    bottom: 60px;
    left: 155px;
  }
`;

export const ContactFormText = styled(Typography.Paragraph).attrs(
  (props: ThemedStyledProps<Props, DefaultTheme>) => ({
    marginProps: props.marginProps || "0px"
  })
)<Props>`
  font-family: 'Source Sans 3', sans-serif; 
  color: #999999;
  font-size: 14px;
  font-weight: 400;
  line-height: 0px;
  text-align: left;

  display: inline;
  margin: ${(props) => props.marginProps};
  position: relative;
  top: -4px;
`;
