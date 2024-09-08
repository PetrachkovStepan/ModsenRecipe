import * as React from "react";

import { useNavigate } from "react-router";

import Image from "@assets/Rectangle 68.png"

import * as Styled from "./styled";

export default function RecipeCard() {
  const navigate = useNavigate();
  const navigateToSearchPage = () => {
    navigate("/search")
  }

  return (
    <Styled.Container>
      <Styled.Img src ={Image} onClick = {navigateToSearchPage}/>
      <Styled.Text>{"Avocado salad"}</Styled.Text>
    </Styled.Container>
  );
}
