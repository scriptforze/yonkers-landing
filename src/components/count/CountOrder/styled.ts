import styled from "styled-components";

export const CountOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: -10px 0px;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 1px solid #D3D3D3;

  ${({ theme }) =>
  theme.custom?.breakpoints?.sm &&
  `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    display: flex;
    height: 124px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const CountOrderSecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: -10px 0px;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 1px solid #D3D3D3;
  position: relative;

  ${({ theme }) =>
  theme.custom?.breakpoints?.sm &&
  `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const CountOrderDetalle = styled.p`
  font-family: 'Source Sans 3', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color:  ${(props) => props.color || "#000000"};
  text-align: right;
  cursor: pointer;

  ${({ theme }) =>
  theme.custom?.breakpoints?.sm &&
  `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    width: 100%;
    margin-top: 10px;
  }
`;

export const CountOrderText = styled.p`
  display: inline;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 16px;
  font-weight: ${(props) => props.prefix || "400"};
  color:  ${(props) => props.color || "#000000"};
  width:  ${(props) => props.itemRef || "220px"};
  text-align: ${(props) => props.property || "left"};
`;

export const CountOrderSpan = styled.span`
  display: inline;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-align: ${(props) => props.prefix || "right"};
`;

export const CountOrderTotal = styled.span`
  display: flex;
  flex-direction: row;  
  justify-content: flex-end;
  gap: 60px;
  width: 100%;
`;

export const CountOrderContainerAddres = styled.span`
  display: flex;
  flex-direction: column;
  width: 220px;
  gap: 4px;
  margin: 20px 0px 40px 0px;
`;

export const CountOrderContainerTotal = styled.span`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: solid 0.1em #D3D3D3;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0px 0px 14px 0px;

  ${({ theme }) =>
  theme.custom?.breakpoints?.sm &&
  `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    width: 46%;
    margin: 14px 0px 14px 0px;
  }
`;

// const getScreenSize = (width: number) => {
//   if (width >= 0 && width <= 575) return "xs";
//   if (width >= 576 && width <= 767) return "sm";
//   if (width >= 768 && width <= 991) return "md";
//   if (width >= 992 && width <= 1199) return "lg";
//   if (width >= 1200 && width <= 1399) return "xl";
//   if (width >= 1400) return "xxl";
//   return null;