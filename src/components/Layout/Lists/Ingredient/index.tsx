import * as React from "react";

import { ListPointImg } from "@assets/ListPoint";
import { IngredientInterface } from "@utils/types/Lists";

import * as Styled from "./styled"
import ProductCard from "../ProductCard";

export default function Ingredient(props:{key:string, item: IngredientInterface}) {
  return (
  <Styled.Container>
    <Styled.DescriptionContainer>
      <ListPointImg/>
      <Styled.Text>{props.item.text}</Styled.Text>
    </Styled.DescriptionContainer>
    <Styled.ProductCardContainer>
      <ProductCard  key={props.item.image} item={props.item}/>
    </Styled.ProductCardContainer>
  </Styled.Container>
  );
}
