import styled from "styled-components";

import { BLUE, BROWN, GRAY, ORANGE, WHITE } from "@constants/colors";

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  margin-top:111px;
  @media (width < 1024px) {
    margin-top:61px;
  }
`;
export const Text = styled.span`
  font-size: 24px;
  color: ${WHITE};
`
export const LinkText = styled.span`
    font-size: 16px;
    margin-top:25px;
    color: ${BROWN}
`