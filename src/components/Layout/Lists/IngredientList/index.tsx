import * as React from "react";
import Ingredient from "../Ingredient";
import * as Styled from "./styled"

export default function IngredientList() {
  return (
    <Styled.ContainerBefore>
      <Styled.ContainerAfter>
        <Styled.ListContainer>
          <Styled.Text>Ingredients</Styled.Text>
          <Ingredient />
          <Ingredient />
          <Ingredient />
        </Styled.ListContainer>
      </Styled.ContainerAfter>
    </Styled.ContainerBefore>
  );
}
