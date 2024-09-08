import * as React from "react";

import * as Styled from "./styled";
import Selector from "@components/Layout/Selector";
import SearchBar from "@components/Layout/SearchBar";
import RecipeList from "@components/Layout/Lists/RecipeList";
import ShowMoreButton from "@components/Layout/ShowMoreButton";

export default function HomePage() {
  return (
    <Styled.Container>
      <Styled.Text>Discover Recipe & Delicious Food</Styled.Text>
      <SearchBar />
      <Styled.SelectContainer>
        <Selector />
        <Selector />
      </Styled.SelectContainer>
      <RecipeList />
      <ShowMoreButton/>
    </Styled.Container>
  );
}
