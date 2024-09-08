import * as React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";

import { Container, MainContainer } from "./AppStyled";
import { Outlet } from "react-router";

function App() {
  return (
    <Container>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </Container>
  );
}

export default App;
