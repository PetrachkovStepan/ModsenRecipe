import * as React from "react";
import * as Styled from "./styled";
import { useNavigate } from "react-router";


export default function BackHomeButton() {
  const navigate = useNavigate();
  const navigateToHomePage = () => {
    navigate("/")
  }
  return (
  <Styled.Container onClick = {navigateToHomePage}>
    <Styled.Text>Back to homepage</Styled.Text>
  </Styled.Container>  
  );
}
