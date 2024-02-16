import { Input } from "antd";
import styled from "styled-components";

export const SearchInputContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled(Input.Search).attrs(() => ({
  enterButton: true,
  placeholder: "¿Qué estás buscando?",
}))`
  &.ant-input-group-wrapper {
    width: 100%;
    & > .ant-input-wrapper {
      input {
        height: 44px;
        border: none;
      }
      button {
        height: 44px;
        font-size: 16px;
        background-color: ${({ theme }) => theme.custom?.colors?.secondary};
      }
    }
  }
`;
