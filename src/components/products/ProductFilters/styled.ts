import { CollapseCard, CollapseGroup } from "@/common/components";
import { Checkbox } from "antd";
import styled from "styled-components";

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

export const FiltersGroupContainer = styled(CollapseGroup)`
  width: 315px;
  display: flex;
  flex-direction: column;
  border: none !important;
  border-radius: 0px !important;
  background-color: rgb(232, 232, 232);
`;

export const FiltersGroupPanelContainer = styled(CollapseCard)`
  &.ant-collapse-item {
    border-radius: 0px !important;
    & > div.ant-collapse-header {
      padding: 20px 5px !important;
      border-radius: 0px !important;
      & > .ant-collapse-header-text > .ant-typography {
        color: #172d5e;
        text-decoration: none;
      }

      & > div.ant-collapse-extra {
        display: block;
        color: #172d5e;
      }
    }

    & > div.ant-collapse-content {
      border-top: none;
      border-radius: 0px !important;
      background-color: transparent;
      border-bottom: 1px solid #d3d3d3;
    }
  }
`;
