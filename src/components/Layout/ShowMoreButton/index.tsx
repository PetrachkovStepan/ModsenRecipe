import * as React from "react";
import * as Styled from "./styled";
import { getMoreDishes } from "@utils/http/RecipeAPI"
import { useDispatch } from "react-redux";
import { useTypeSelector } from "@hooks/useTypeSelector";
import { ADD_ITEMS, NEXT_PAGE } from "@store/reducers/recipeListReducer";


export default function ShowMoreButton() {
  const state = useTypeSelector(state => state.list)
  const dispatch = useDispatch()
  const getMore = async () => {
    let resp;
    if(state.href != undefined){
      resp = await getMoreDishes(state.href)
      console.log("GET MORE");
      console.log(resp.hits);
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
