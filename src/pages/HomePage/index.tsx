import * as React from "react";

import { useDispatch } from "react-redux";

import Loader from "@components/Loader";
import Selector from "@components/Layout/Selector";
import SearchBar from "@components/Layout/SearchBar";
import { getAllDishes } from "@utils/http/RecipeAPI";
import { RecipeInterface } from "@utils/types/Lists";
import { useTypeSelector } from "@hooks/useTypeSelector";
import RecipeList from "@components/Layout/Lists/RecipeList";
import { CHANGE_LOADER } from "@store/reducers/loaderReduser";
import ShowMoreButton from "@components/Layout/ShowMoreButton";
import { NEXT_PAGE, SET_ITEMS } from "@store/reducers/recipeListReducer";
import { DIET_CATEGORY, DISH_CATEGORY } from "@store/reducers/searchReducer";
import { DIET_CATEGORIES, DISH_CATEGORIES } from "@store/actions/searchActions";

import * as Styled from "./styled";

export default function HomePage() {
  const dispatch = useDispatch()
  const searchState = useTypeSelector(state => state.search)
  const listState = useTypeSelector(state => state.list)
  const loaderState = useTypeSelector(state => state.loader)
  const [recipes, setRecipes] = React.useState<any>({items:[]})
  
  React.useEffect(() => {
    getAllRecipes()
  },[searchState]);

  React.useEffect(() => {
    setValues(listState.items)
  },[listState]);

  const getAllRecipes = async () => {
    dispatch({type:CHANGE_LOADER, payload: true})
    let resp = await getAllDishes(searchState.searchLine, searchState.diet_category, searchState.dish_category)
    dispatch({type:CHANGE_LOADER, payload: false})
    dispatch({type: SET_ITEMS, payload: resp.hits})
    if(resp._links.next != undefined){
      dispatch({type: NEXT_PAGE, payload: [], next: resp._links.next.href})  
    }
  }
  const setValues = (list: RecipeInterface[]) => {
    if(list.length == 0){
      setRecipes({items:[]})
      return
    }
    setRecipes({items:list})
  }
  return (
    <Styled.Container>
      <Styled.Text>Discover Recipe & Delicious Food</Styled.Text>
      <SearchBar />
      <Styled.SelectContainer>
        <Selector params={DIET_CATEGORIES} actionType={DIET_CATEGORY}/>
        <Selector params={DISH_CATEGORIES} actionType={DISH_CATEGORY}/>
      </Styled.SelectContainer>
      {!loaderState.isOpen ? <RecipeList items = {recipes.items}/> : <Loader/>}
      <ShowMoreButton/>
    </Styled.Container>
  );
}
