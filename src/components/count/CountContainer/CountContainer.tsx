import React from "react";
import { CountContainerProps } from "./types";
import {
  CountContentContainer,
} from "./styled";

const CountContainer = ({ children }: CountContainerProps) => {
  return (
    <CountContentContainer>{children}</CountContentContainer>
  );
};

export default CountContainer;
