import * as React from "react";
import * as Styled from "./styled";
import {getAllDishes} from "@utils/http/RecipeAPI"


export default function ShowMoreButton() {
  const getMore = async () => {
    await getAllDishes()
  }
  return (
  <Styled.Container onClick = {getMore}>
    <Styled.Text>Show More</Styled.Text>
  </Styled.Container>  
  );
}
