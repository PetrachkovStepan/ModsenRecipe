import * as React from "react";
import * as Styled from "./styled";
import { SearchImg } from "@assets/SearchImg";

export default function SearchBar() {
  return (
  <>
    <Styled.Container>
      <Styled.Input placeholder = "Search Your Favorite Food"></Styled.Input>
      <Styled.Img>
        <SearchImg/>
      </Styled.Img>
    </Styled.Container>
  </>
);
}
