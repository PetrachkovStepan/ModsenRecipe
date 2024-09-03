import * as React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Outlet from "@pages/Outlet";
import { Container, MainContainer } from "./AppStyled";

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
