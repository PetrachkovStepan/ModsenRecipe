import styled from "styled-components";

import { BLUE, GRAY, ORANGE } from "@constants/colors";

export const Container = styled.div`
  height: 76px;
  width: 100%;
  max-width: 1280px;
  min-width: 350px;
  margin-top:66px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: end;
  position: relative;
`;
export const Input = styled.input`
    border: 1px solid ${ORANGE};
    border-radius: 48px;
    width: 100%;
    height: 76px;
    padding-left: 30px;
    font-size: 24px;
    @media (width < 1024px) {
      height: 55px;
      font-size: 14px
    }
    &::placeholder{
      color: ${GRAY};
      overflow:hidden;
    }
`;

export const Img = styled.button`
    position: absolute;
    right: 30px;
    border-color:transparent;
    background:transparent

`

