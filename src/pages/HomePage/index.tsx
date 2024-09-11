import * as React from "react";

import * as Styled from "./styled";
import Selector from "@components/Layout/Selector";
import SearchBar from "@components/Layout/SearchBar";
import RecipeList from "@components/Layout/Lists/RecipeList";
import ShowMoreButton from "@components/Layout/ShowMoreButton";
import { getAllDishes } from "@utils/http/RecipeAPI";
import { useTypeSelector } from "@hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import { SET_ITEMS } from "@store/reducers/recipeListReducer";
import { DIET_CATEGORIES, DISH_CATEGORIES } from "@store/actions/searchActions";
import { DIET_CATEGORY, DISH_CATEGORY } from "@store/reducers/searchReducer";

export default function HomePage() {
  const dispatch = useDispatch()
  const searchState = useTypeSelector(state => state.search)
  const listState = useTypeSelector(state => state.list)
  const [recipes, setRecipes] = React.useState<any>({items:[]})
  
  React.useEffect(() => {
    console.log("state");
    console.log(searchState);
    getAllRecipes()
  },[searchState]);
  const getAllRecipes = async () => {
    let resp = await getAllDishes()
    dispatch({type: SET_ITEMS, payload: {items:resp}})
    console.log("listState");
    console.log(listState);
    setRecipes({items:resp})
  }
  return (
    <Styled.Container>
      <Styled.Text>Discover Recipe & Delicious Food</Styled.Text>
      <SearchBar />
      <Styled.SelectContainer>
        <Selector params={DIET_CATEGORIES} actionType={DIET_CATEGORY}/>
        <Selector params={DISH_CATEGORIES} actionType={DISH_CATEGORY}/>
      </Styled.SelectContainer>
      <RecipeList items = {recipes.items}/>
      <ShowMoreButton/>
    </Styled.Container>
  );
}
