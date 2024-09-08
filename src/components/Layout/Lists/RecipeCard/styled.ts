import styled from "styled-components";

import { BLUE, DARK_BLUE, GRAY, ORANGE } from "@constants/colors";

export const Container = styled.div`
  height: 436px;
  width: 293px;
  border-radius: 20px;
  background-color: ${GRAY};
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (width < 1024px) {
    height: 372px;
    width: 350px;    
  }
`;
export const Img = styled.img`
    width: 100%;
    height: 319px;
    border-radius: 20px 20px 0 0;
    background-color: ${ORANGE};
`;
export const Text = styled.span`
    font-size: 22px;
    margin-top: 25px;
    color: ${DARK_BLUE};
  @media (width < 1024px) {
    font-size: 18px;
    margin-top: 20px; 
  }
`;
