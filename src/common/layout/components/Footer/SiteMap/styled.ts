import { Typography } from "antd";
import styled from "styled-components";

export const SiteMapContainer = styled.section`
  width: 100%;
  margin-bottom: 31px;
`;

export const CardContentText = styled(Typography.Text)`
  color: #fafafa;
  font-size: 16px;
  font-weight: 400;
  line-height: 40px;
`;

export const UnorderedList = styled.ul`
  color: #fafafa;
  list-style-type: disc;

  ${({ theme }) =>
    theme.custom?.breakpoints?.xl &&
    `@media (min-width: ${theme.custom?.breakpoints?.xl?.min})`} {
    margin: 0px;
    list-style-type: none;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 0px;
`;
