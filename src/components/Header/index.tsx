import * as React from "react";

import { BurgerButtonImg } from "@assets/BurgerButtonImg";

import * as Styled from "./styled";
import { Logo } from "@assets/Logo";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();
  const navigateToHomePage = () => {
    navigate("/")
  }
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.LogoContainer onClick = {navigateToHomePage}>
          <Logo />
        </Styled.LogoContainer>
        <Styled.DesktopContainer>
          <Styled.NavLink onClick = {navigateToHomePage}>Home</Styled.NavLink>
        </Styled.DesktopContainer>
        <Styled.MobileContainer>
        <BurgerButtonImg/>
        </Styled.MobileContainer>
      </Styled.Container>
    </Styled.Wrapper>
  );
}
