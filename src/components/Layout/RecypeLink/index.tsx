import * as React from "react";
import * as Styled from "./styled";

export default function RecypeLink(props:{link:string}) {
  return (
    <Styled.Container>
      <Styled.Text>Recipe link</Styled.Text>
      <Styled.LinkText>{props.link}</Styled.LinkText>
    </Styled.Container>
);
}
