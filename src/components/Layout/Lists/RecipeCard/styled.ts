import styled from "styled-components";

import { GRAY, ORANGE } from "@constants/colors";

export const Container = styled.div`
  height: 436px;
  width: 293px;
  border-radius: 20px;
  background-color: ${GRAY};
  display: flex;
  justify-content: center;
  @media (width < 1024px) {
    height: 372px;
    width: 350px;    
  }
`;
export const Img = styled.div`
    width: 100%;
    height: 319px;
    border-radius: 20px 20px 0 0;
    background-color: ${ORANGE};
`;
export const Text = styled.div`
    
`;
