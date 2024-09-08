import * as React from "react";

import { Outlet } from "react-router";

import Header from "@components/Header";
import Footer from "@components/Footer";
import BurgerMenu from "@components/BurgerMenu";

import { Container, MainContainer } from "./AppStyled";

function App() {
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
