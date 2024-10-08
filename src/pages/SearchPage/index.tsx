import * as React from "react";

import { useDispatch } from "react-redux";

import Loader from "@components/Loader";
import { MedalImg } from "@assets/MedalImg";
import { CaloryImg } from "@assets/CaloryImg";
import { getOneDish } from "@utils/http/RecipeAPI";
import RecypeLink from "@components/Layout/RecypeLink";
import { useTypeSelector } from "@hooks/useTypeSelector";
import { CHANGE_LOADER } from "@store/reducers/loaderReduser";
import ProductList from "@components/Layout/Lists/ProductList";
import IngredientList from "@components/Layout/Lists/IngredientList";

import * as Styled from "./styled"

export default function SearchPage() {
  const dispatch = useDispatch()
  const loaderState = useTypeSelector(state => state.loader)
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
    dispatch({type:CHANGE_LOADER, payload: true})
    const resp = await getOneDish(state.uri)
    dispatch({type:CHANGE_LOADER, payload: false})
    setRecipe(resp)
  }
  return (
    <Styled.Container>
      {!loaderState.isOpen ? 
      <>
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
      </> 
      : <Loader/>}
    </Styled.Container>
  );
}

