import * as React from "react";
import * as Styled from "./styled"
import { ListPointImg } from "@assets/ListPoint";
import ProductCard from "../ProductCard";
import { IngredientInterface } from "@utils/types/Lists";

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
