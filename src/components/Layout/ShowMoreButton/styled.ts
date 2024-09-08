import { DARK_BLUE, GRAY } from "@constants/colors";
import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content:center;
  align-items:center;
  height: 50px;
  width: 250px;
  border-radius:50px;
  margin: 49px 0 110px 0;
  box-shadow: 0 4px 20px #686DE0;
  background-color: ${DARK_BLUE};
  @media (width) {
    margin-bottom: 95px;
  }
`;
export const Text = styled.span`
  font-size: 24px;
  color: ${GRAY};
`;
