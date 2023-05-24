import { Collapse, Typography } from "antd";
import styled from "styled-components";

export const CollapseCardContainer = styled(Collapse.Panel)`
  &.ant-collapse-item {
    & > div.ant-collapse-header {
      color: #fafafa;
      padding-left: 0px;
      align-items: center;
      padding-inline-start: 0px !important;
    }
  }

  &.ant-collapse-item:last-child {
    border-bottom: 1px solid #d9d9d9;
  }

  ${({ theme }) =>
    theme.custom?.breakpoints?.xl &&
    `@media (min-width: ${theme.custom?.breakpoints?.xl?.min})`} {
    &.ant-collapse-item {
      & > div.ant-collapse-header {
        padding: 0px;
        & > div.ant-collapse-extra {
          display: none;
        }
      }

      & > div.ant-collapse-content {
        & > div.ant-collapse-content-box {
          padding: 20px 0px 0px;
        }
      }
    }

    &.ant-collapse-item {
      border-bottom: none !important;
    }
  }
`;

export const CollapseCardTitle = styled(Typography.Text)`
  color: #fafafa;
  font-size: 16px;
  font-weight: 700;
  line-height: 40px;
  text-decoration: underline;

  ${({ theme }) =>
    theme.custom?.breakpoints?.xl &&
    `@media (min-width: ${theme.custom?.breakpoints?.xl?.min})`} {
    line-height: 0px;
  }
`;
