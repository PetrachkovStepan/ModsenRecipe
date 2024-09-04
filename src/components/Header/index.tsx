import * as React from "react";

import { BurgerButtonImg } from "@assets/BurgerButtonImg";

import * as Styled from "./styled";
import { Logo } from "@assets/Logo";

export default function Header() {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.LogoContainer>
          <Logo />
        </Styled.LogoContainer>
        <Styled.DesktopContainer>
          <Styled.NavLink>Home</Styled.NavLink>
        </Styled.DesktopContainer>
        <Styled.MobileContainer>
        <BurgerButtonImg/>
        </Styled.MobileContainer>
      </Styled.Container>
    </Styled.Wrapper>
  );
}
