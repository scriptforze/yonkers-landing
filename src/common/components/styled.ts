import { Divider } from "antd";
import styled from "styled-components";

export const HeaderDivider = styled(Divider)`
  &.ant-divider-horizontal.ant-divider-with-text {
    &::before,
    &::after {
      border-block-start-color: #cccccc;
    }

    .ant-divider-inner-text {
      padding: 0px 82px;
    }
  }
`;
