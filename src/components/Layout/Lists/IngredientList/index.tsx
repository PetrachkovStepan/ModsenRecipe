import * as React from "react";
import Ingredient from "../Ingredient";
import * as Styled from "./styled"
import { IngredientListInterface } from "@utils/types/Lists";

export default function IngredientList({items}:IngredientListInterface) {
  return (
    <Styled.ContainerBefore>
      <Styled.ContainerAfter>
        <Styled.ListContainer>
          <Styled.Text>Ingredients</Styled.Text>
            {
            items.map((item) =>
                <Ingredient key={item.image} item={item}/>
            )}
        </Styled.ListContainer>
      </Styled.ContainerAfter>
    </Styled.ContainerBefore>
  );
}
