import * as React from "react";

import * as Styled from "./styled";
import RecipeCard from "../RecipeCard";
import { RecipeListInterface } from "@utils/types/Lists";

export default function RecipeList({items}:RecipeListInterface) {
  
  return (
    <Styled.Container>
      
      <Styled.HeadContainer><Styled.Line></Styled.Line><Styled.Text>Founded dishes</Styled.Text></Styled.HeadContainer>

      <Styled.ListContainer>
        {
          items.map((item) =>
              <RecipeCard key={item.recipe.uri} item={item}/>
        )}
      </Styled.ListContainer>
      
    </Styled.Container>
  );
}
