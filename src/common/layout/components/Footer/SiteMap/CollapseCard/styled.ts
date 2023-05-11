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
`;

export const CollapseCardTitle = styled(Typography.Text)`
  color: #fafafa;
  font-size: 16px;
  font-weight: 700;
  line-height: 40px;
  text-decoration: underline;
`;
