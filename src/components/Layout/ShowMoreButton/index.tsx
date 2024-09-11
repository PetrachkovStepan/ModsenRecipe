import * as React from "react";
import * as Styled from "./styled";
import { getMoreDishes } from "@utils/http/RecipeAPI"
import { useDispatch } from "react-redux";
import { useTypeSelector } from "@hooks/useTypeSelector";
import { ADD_ITEMS } from "@store/reducers/recipeListReducer";


export default function ShowMoreButton() {
  const state = useTypeSelector(state => state.list)
  const dispatch = useDispatch()
  const getMore = async () => {
    console.log("state.href");
    console.log(state.href);
    let resp;
    if(state.href != undefined){
      resp = await getMoreDishes(state.href)
      console.log("GET MORE");
      console.log(resp);
      dispatch({type: ADD_ITEMS, payload: {}})
    }  
    //dispatch({type: "", payload: await getMoreDishes(state.href)})
    //await getMoreDishes("https://api.edamam.com/api/recipes/v2?app_key=%2048d44de737053a2137e3405fac9bb22e%09&_cont=CHcVQBtNNQphDmgVQntAEX4BY0t3AgQDSmxJCmsaalx6DQoORHdcEWIQMgYiA1ABRDFAVmZGYlQhDFJSEDRCBjBFMVAgBwNSUQhcETRRPAhhDgEHDg%3D%3D&diet=balanced&imageSize=REGULAR&type=any&app_id=79c47d40")
  }
  return (
  <Styled.Container onClick = {getMore}>
    <Styled.Text>Show More</Styled.Text>
  </Styled.Container>  
  );
}
