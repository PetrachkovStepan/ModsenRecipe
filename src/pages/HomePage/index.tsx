import SearchBar from "../../components/Layout/SearchBar";
import Selector from "../../components/Layout/Selector";
import RecipeList from "../../components/Layout/Lists/RecipeList";
import * as React from "react";
import { Container, SelectContainer } from "./styled";

export default function HomePage() {
  return (
    <Container>
      <div>Discover Recipe & Delicious Food</div>
      <SearchBar />
      <SelectContainer>
        <Selector />
        <Selector />
      </SelectContainer>
      <RecipeList />
    </Container>
  );
}
