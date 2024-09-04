import * as React from "react";
import * as Styled from "./styled"
import SearchPage from "../SearchPage";
import Page404 from "../Page404";
import HomePage from "../HomePage";

export default function Outlet() {
  return (
    <Styled.Container>
      <HomePage />
      <SearchPage />
      <Page404 />
    </Styled.Container>
  );
}
