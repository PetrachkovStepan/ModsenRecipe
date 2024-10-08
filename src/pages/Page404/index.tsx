import * as React from "react";

import BackHomeButton from "@components/Layout/BackHomeButton";

import * as Styled from "./styled"

export default function Page404() {
  return (
    <Styled.Container>
      <Styled.Text404>404</Styled.Text404>
      <Styled.TextOops>OOOps! Page Not Found</Styled.TextOops>
      <Styled.TextDescription>This page doesn’t exist or was removed! We suggest you back to home</Styled.TextDescription>
      <BackHomeButton/>
    </Styled.Container>
  );
}
