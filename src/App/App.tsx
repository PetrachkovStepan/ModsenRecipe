import * as React from "react";

import { Outlet } from "react-router";

import Header from "@components/Header";
import Footer from "@components/Footer";
import BurgerMenu from "@components/BurgerMenu";

import { Container, MainContainer } from "./AppStyled";
import { useTypeSelector } from "@hooks/useTypeSelector";

function App() {
  const state = useTypeSelector(state => state.burger)
  const [burger, setBurger] = React.useState(false)
  React.useEffect(() => {
    console.log("state.isOpen");
    console.log(state.isOpen);
    const element = document.getElementById('sideWrapper')
    if (element) {
    if (state.isOpen)
      element.style.right = '0'
    else
      element.style.right = '-390px'
    }
    
  },[state]);
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
