import { GRAY, GREEN } from "@constants/colors";
import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content:center;
  align-items:center;
  height: 50px;
  width:100%;
  max-width: 240px;
  border-radius:50px;
  border-color: transparent;
  box-shadow: 0 4px 20px #686DE0;
  background-color: ${GREEN};
  @media (width) {
    margin-bottom: 95px;
  }
`;
export const Text = styled.span`
  font-size: 14px;
  color: ${GRAY};
`;
