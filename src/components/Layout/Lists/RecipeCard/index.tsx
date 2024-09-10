import * as React from "react";

import { useNavigate } from "react-router";

import Image from "@assets/Rectangle 68.png"

import * as Styled from "./styled";
import { RecipeInterface } from "@utils/types/Lists";
import { useDispatch } from "react-redux";
import { SET_ITEM } from "@store/reducers/recipeReducer";

export default function RecipeCard(props:{key:string, item: RecipeInterface}) {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const navigateToSearchPage = () => {
    dispatch({type:SET_ITEM, payload: props.item.recipe.uri})
    navigate("/search")
  }

  return (
    <Styled.Container>
      <Styled.Img src ={props.item.recipe.image} onClick = {navigateToSearchPage}/>
      <Styled.Text>{props.item.recipe.label}</Styled.Text>
    </Styled.Container>
  );
}
