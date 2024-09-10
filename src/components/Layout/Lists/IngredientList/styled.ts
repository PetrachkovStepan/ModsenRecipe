import { BLUE, BROWN, LIGTH_BLUE, WHITE } from "@constants/colors";

import styled from "styled-components";

export const ContainerBefore = styled.div`
  display:flex;
  min-height: 250px;
  max-width: 572px;
  margin-top: 52px;
  border-radius: 20px;
  background: linear-gradient(to left, rgba(225,225,225,0.2) 0%,rgba(39,53,90,1) 100%);
  @media (width < 1024px) {
    margin-top:14px;
    background:transparent;
  }
`;
export const ContainerAfter = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  min-height: 245px;
  margin:3px 2px 3px 0;
  border-radius: 18px;
  background: linear-gradient(to left, rgba(58,71,103,1) 24%,rgba(39,53,90,1) 100%);
  @media (width < 1024px) {
    background:transparent;
  }
`;
export const ListContainer = styled.div`
  display:flex;
  flex-direction:column;
  margin:  12px 0 12px 0;
  gap: 16px;
`
export const Text = styled.span`
  font-size: 24px;
  margin-bottom:8px;
  color: ${WHITE};
`