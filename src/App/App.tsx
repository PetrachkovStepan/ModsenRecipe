import * as React from "react";

import { Outlet } from "react-router";

import Header from "@components/Header";
import Footer from "@components/Footer";
import BurgerMenu from "@components/BurgerMenu";

import { Container, MainContainer } from "./AppStyled";
import { useTypeSelector } from "@hooks/useTypeSelector";

function App() {
  const burgerState = useTypeSelector(state => state.burger)
  React.useEffect(() => {
    const element = document.getElementById('sideWrapper')
    if (element) {
    if (burgerState.isOpen)
      element.style.right = '0'
    else
      element.style.right = '-390px'
    }    
  },[burgerState]);
  return (
    <Container>
      <Header />
      <BurgerMenu/>
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </Container>
  );
}

export default App;
