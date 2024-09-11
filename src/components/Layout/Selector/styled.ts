import styled from "styled-components";

import { ORANGE } from "@constants/colors";

export const Container = styled.div`
  height: 48px;
  width: 322px;
  margin-bottom:29px;
  @media (width < 1024px) {
    width: 350px
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: end;
`;
export const Select = styled.select`
    border: 1px solid ${ORANGE};
    border-radius: 48px;
    width: 100%;
    height: 100%;
    padding-left: 15px;
    font-size: 16px;
    font-family: "Inter", sans-serif;
`;


export const Option = styled.option`
  border-radius:15px;
  border: 1px solid ${ORANGE};

`
export const Img = styled.div`
    position: absolute;
`

