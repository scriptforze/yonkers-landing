import styled from "styled-components";

export const CountDeliveryContainer = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-columns: repeat(
    auto-fill,
    minmax(295px, 1fr)
  );
  max-width: 1048px;
  flex-wrap: wrap;
  gap: 20px 40px;
`;
