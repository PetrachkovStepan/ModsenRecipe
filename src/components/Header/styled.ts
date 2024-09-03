import styled from "styled-components";

import { BLUE } from "../../constants/colors";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: ${BLUE};
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.div`
  background-image: url("../../assets/Logo.svg");
  height: 100%;
  background-size: 100%;
  -o-background-size: 100%;
  -webkit-background-size: 100%;
  background-size: cover;
`;

//Костанты ебани в media
export const DesktopContainer = styled.div`
  @media(width <= 1024px) {
    display: none;
  }
  display: flex;
`

export const MobileContainer = styled.div`
  @media(width > 1024px) {
      display: none;
  }
`

export const NavLink = styled.span`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`