import { Button, Tag } from "antd";
import styled from "styled-components";

export const ActiveFiltersContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  padding: 4px, 10px, 4px, 10px;
  border-radius: 4px;
  margin-top: 13px;
`;

export const FilterTag = styled(Tag)`
  color: #999999 !important;
  font-size: 13px;
  font-weight: 400;
  background-color: #e8e8e8 !important;
`;

export const RemoveFiltersButton = styled(Button)`
  color: #172d5e !important;
  font-size: 13px;
  font-weight: 400;
  background: #e8e8e8 !important;
`;
