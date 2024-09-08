import { BLUE, BROWN, LIGTH_BLUE, WHITE } from "@constants/colors";

import styled from "styled-components";

export const Container = styled.div`
    display: flex; 
    flex-direction: column;
`;
export const DescriptionContainer = styled.div`
    display: flex; 
    flex-direction: row;
    align-items:center;
`;
export const ProductCardContainer = styled.div`
  margin-top: 15px;
    @media (width > 1024px) {
      display:none;
    }
`;
export const Text = styled.span`
  font-size: 16px;
  margin-left:20px;
  color: ${LIGTH_BLUE};
  @media (width < 1024px) {
    font-size: 12px;
  }
`