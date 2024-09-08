import styled from "styled-components";

import { WHITE } from "@constants/colors";

// 1rem = ...px
// rem => font-size

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${WHITE};
  display: flex;
  flex-direction: column;
  overflow: auto;
  scrollbar-width: "none";
  &::-webkit-scrollbar {
      width: 0px;
    }
`

export const MainContainer = styled.main`
  flex-grow: 1;
  margin: 170px 20px 20px 20px;
`