import { ORANGE } from "@constants/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;
export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:center;
  max-width: 1284px;
  row-gap: 28px;
  column-gap: 37px;
  margin-top: 44px;
`;
export const Line = styled.span`
  width: 4px;
  height: 44px;
  background-color: ${ORANGE};
  border-radius: 100vh;
  font-family: "Inter", sans-serif;
`
export const Text = styled.span`
  font-size: 40px;
  font-family: "Inter", sans-serif;
`

export const HeadContainer = styled.div`
display: flex;
align-items: center;
gap: 10px;
`