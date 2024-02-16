import { Tabs, Typography } from "antd";
import styled from "styled-components";

export const CustomTabs = styled(Tabs)`
  & .ant-tabs-nav {
    margin: 0px;
    & .ant-tabs-tab {
      border: none;
      color: #172d5e;
      font-weight: 600;
      background-color: #d3d3d3;
      border-radius: 8px 8px 0px 0px;
    }

    & .ant-tabs-tab-active {
      color: #172d5e;
      background-color: #ffffff;
    }
  }
`;

export const InformationContainer = styled.div`
  padding: 0px 24px;
`;

export const InformationTitle = styled(Typography.Title)`
  color: #0f2555 !important;
  font-size: 38px !important;
  font-weight: 600 !important;
  margin-bottom: 34px !important;
`;

export const InformationTabContent = styled.div`
  padding: 50px 40px;
  background-color: #ffffff;
  border-radius: 0px 8px 8px 8px;
`;

export const InformationTabs = styled.div`
  padding: 32px 24px 42px 24px;
`;
