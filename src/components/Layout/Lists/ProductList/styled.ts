import styled from "styled-components";

import {WHITE } from "@constants/colors";

export const Container = styled.div`
  margin-top: 25px;
  @media (width < 1024px) {
    display: none;
  }
`;
export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 41px;
  margin-top: 29px;
`;


export const Text = styled.span`
  font-size: 24px;
  color: ${WHITE};
`