import styled from "styled-components";

import { BLUE, GRAY } from "../../constants/colors";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  background-color: ${BLUE};
  width: 100%;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  position: fixed;
`;
export const Container = styled.div`
  width: 100%;
  max-width: 1444px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
export const LogoContainer = styled.div`
  margin: 18px;
`;
export const DesktopContainer = styled.div`
  margin: 18px;
  @media(width <= 1024px) {
    display: none;
  }
  display: flex;
`;
export const MobileContainer = styled.div`
  margin: 18px;
  @media(width > 1024px) {
      display: none;
  }
`

export const NavLink = styled.span`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  font-size: 24px;
  font-family: "Inter", sans-serif;
  color:${GRAY}
`