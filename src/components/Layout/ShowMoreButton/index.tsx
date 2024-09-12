import * as React from "react";

import { useDispatch } from "react-redux";

import { getMoreDishes } from "@utils/http/RecipeAPI"
import { useTypeSelector } from "@hooks/useTypeSelector";
import { ADD_ITEMS, NEXT_PAGE } from "@store/reducers/recipeListReducer";

import * as Styled from "./styled";

export default function ShowMoreButton() {
  const state = useTypeSelector(state => state.list)
  const dispatch = useDispatch()
  const getMore = async () => {
    let resp;
    if(state.href != undefined){
      resp = await getMoreDishes(state.href)
      dispatch({type: ADD_ITEMS, payload: resp.hits})
      dispatch({type: NEXT_PAGE, payload: [], next: resp._links.next.href})  
    }  
  }
  return (
  <Styled.Container onClick = {getMore}>
    <Styled.Text>Show More</Styled.Text>
  </Styled.Container>  
  );
}
