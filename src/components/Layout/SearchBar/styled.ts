import styled from "styled-components";

import { ORANGE } from "@constants/colors";

export const Container = styled.div`
  height: 76px;
  width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: end;
`;
export const Input = styled.input`
    border: 1px solid ${ORANGE};
    border-radius: 48px;
    width: 100%;
    height: 76px;
`;
export const Img = styled.div`
    position: absolute;
`

