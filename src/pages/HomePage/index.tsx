import * as React from "react";

import * as Styled from "./styled";
import Selector from "@components/Layout/Selector";
import SearchBar from "@components/Layout/SearchBar";
import RecipeList from "@components/Layout/Lists/RecipeList";
import ShowMoreButton from "@components/Layout/ShowMoreButton";
import { getAllDishes } from "@utils/http/RecipeAPI";
import { useTypeSelector } from "@hooks/useTypeSelector";

export default function HomePage() {
  const state = useTypeSelector(state => state.search)
  const [recipes, setRecipes] = React.useState<any>({items:[]})
  
  React.useEffect(() => {
    console.log("state");
    console.log(state);
    getAllRecipes()
  },[]);
  const getAllRecipes = async () => {
    let resp = await getAllDishes()
    setRecipes({items:resp})
  }
  return (
    <Styled.Container>
      <Styled.Text>Discover Recipe & Delicious Food</Styled.Text>
      <SearchBar />
      <Styled.SelectContainer>
        <Selector />
        <Selector />
      </Styled.SelectContainer>
      <RecipeList items = {recipes.items}/>
      <ShowMoreButton/>
    </Styled.Container>
  );
}
