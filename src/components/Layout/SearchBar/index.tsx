import * as React from "react";
import { Container, Img, Input } from "./styled";
import { SearchImg } from "@assets/SearchImg";

export default function SearchBar() {
  return (
  <>
    <Container>
      <Input></Input>
      <Img>
        <SearchImg/>
      </Img>
    </Container>
  </>
);
}
