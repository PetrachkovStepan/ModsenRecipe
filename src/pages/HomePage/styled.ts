import { DARK_BLUE } from "@constants/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top:23px;
`;
export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width:848px;
  margin-top:44px;
  @media(width < 1024px){
    margin-top:49px;
    flex-direction: column;
  }
  align-items: center;
`;
export const Text = styled.span`
  font-size: 78px;
  margin-top:126px;
  color: ${DARK_BLUE};
  @media(width < 1024px) {
      display: none;
  }
`