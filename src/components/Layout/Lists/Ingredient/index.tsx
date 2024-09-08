import * as React from "react";
import * as Styled from "./styled"
import { ListPointImg } from "@assets/ListPoint";
import ProductCard from "../ProductCard";

export default function Ingredient() {
  return (
  <Styled.Container>
    <Styled.DescriptionContainer>
      <ListPointImg/>
      <Styled.Text>{"1 1/2 to 2 ounces of guanciale"}</Styled.Text>
    </Styled.DescriptionContainer>
    <Styled.ProductCardContainer>
      <ProductCard/>
    </Styled.ProductCardContainer>
  </Styled.Container>
  );
}
