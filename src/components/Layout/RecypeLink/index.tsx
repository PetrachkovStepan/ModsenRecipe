import * as React from "react";
import * as Styled from "./styled";

export default function RecypeLink() {
  return (
    <Styled.Container>
      <Styled.Text>Recipe link</Styled.Text>
      <Styled.LinkText>{"http://localhost:8080/search"}</Styled.LinkText>
    </Styled.Container>
);
}
