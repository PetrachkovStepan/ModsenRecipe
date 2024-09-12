import * as React from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { Logo } from "@assets/Logo";
import { BurgerButtonImg } from "@assets/BurgerButtonImg";
import { CHANGE_BURGER } from "@store/reducers/burgerMenuReducer";

import * as Styled from "./styled";

export default function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const navigateToHomePage = () => {
    navigate("/")
  }
  const hideBurger = () => {
    dispatch({type: CHANGE_BURGER, payload: true})
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
        <Styled.MobileContainer onClick = {hideBurger}>
        <BurgerButtonImg/>
        </Styled.MobileContainer>
      </Styled.Container>
    </Styled.Wrapper>
  );
}
