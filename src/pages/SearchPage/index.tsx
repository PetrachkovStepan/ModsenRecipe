import * as React from "react";
import Image from "@assets/DishImg.png"
import { MedalImg } from "@assets/MedalImg";
import { CaloryImg } from "@assets/CaloryImg";
import RecypeLink from "@components/Layout/RecypeLink";
import ProductList from "@components/Layout/Lists/ProductList";
import IngredientList from "@components/Layout/Lists/IngredientList";

import * as Styled from "./styled"
import { useTypeSelector } from "@hooks/useTypeSelector";
import { getOneDish } from "@utils/http/RecipeAPI";

export default function SearchPage() {
  const [recipe, setRecipe] = React.useState<any>({
    label: "",
    calories: 0,
    cuisineType: "",
    dishType: "",
    image: "",
    ingredients: [],
    mealType: [],
    url: "",
})
  const state = useTypeSelector(state => state.recipe)
  
  React.useEffect(() => {
    getDishInfo()
  },[]);
  const getDishInfo = async () => {
    const resp = await getOneDish(state.uri)
    console.log(resp);
    setRecipe(resp)
  }
  return (
    <Styled.Container>
      <Styled.DishImg src = {recipe.image}/>
      <Styled.InfoContainer>
        <Styled.InfoWrapper>
          <Styled.MealType>Meal type - {recipe.mealType}</Styled.MealType>
          <Styled.MealName>{recipe.label}</Styled.MealName>
          
          <Styled.DishPropertiesContainer>
            <Styled.DishPropertiesWrapper>
              <CaloryImg/>
              <Styled.DishProp>{recipe.calories} calories</Styled.DishProp>
            </Styled.DishPropertiesWrapper>
            <Styled.DishPropertiesWrapper>
              <MedalImg/>
              <Styled.DishProp>Cuisine Type - {recipe.cuisineType}</Styled.DishProp>
            </Styled.DishPropertiesWrapper>
          </Styled.DishPropertiesContainer>

          <IngredientList items={recipe.ingredients}/>
          <ProductList items={recipe.ingredients}/>
          <RecypeLink link={recipe.url}/>
        </Styled.InfoWrapper>
      </Styled.InfoContainer>
    </Styled.Container>
  );
}

