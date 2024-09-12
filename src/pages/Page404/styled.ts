import { BLUE, BROWN, DARK_GRAY, GRAY, ORANGE, WHITE } from "@constants/colors";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height:100%;
  @media (width < 1024px) {
    flex-direction: column;
  }
`;
export const Text404 = styled.span`
  font-size: 122px;
  font-family: "Inter", sans-serif;
  color: ${ORANGE};
  @media (width < 1024px) {
    font-size: 40px
  }
`;
export const TextOops = styled.span`
  font-size: 46px;
  font-family: "Inter", sans-serif;
  margin-top: 24px;
  @media (width < 1024px) {
    margin-top: 32px;
    font-size: 24px;
  }
`;
export const TextDescription = styled.span`
  font-size: 21px;
  font-family: "Inter", sans-serif;
  margin-top: 45px;
  margin-bottom: 45px;
  color: ${DARK_GRAY};
  @media (width < 1024px) {
    margin-top: 78px;
    margin-bottom: 30px;
  }
`;