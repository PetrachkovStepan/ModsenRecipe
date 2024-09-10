import * as React from "react";
import * as Styled from "./styled";
import {getAllDishes, getOneDish} from "@utils/http/RecipeAPI"


export default function ShowMoreButton() {
  const getMore = async () => {
    // await getAllDishes()
    //await getOneDish()
  }
  return (
  <Styled.Container onClick = {getMore}>
    <Styled.Text>Show More</Styled.Text>
  </Styled.Container>  
  );
}
