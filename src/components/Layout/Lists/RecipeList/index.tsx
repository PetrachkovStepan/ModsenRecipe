import * as React from "react";

import * as Styled from "./styled";
import RecipeCard from "../RecipeCard";

export default function RecipeList() {
  return (
    <Styled.Container>
      
      <Styled.HeadContainer><Styled.Line></Styled.Line><Styled.Text>Founded dishes</Styled.Text></Styled.HeadContainer>

      <Styled.ListContainer>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </Styled.ListContainer>
      
    </Styled.Container>
  );
}
