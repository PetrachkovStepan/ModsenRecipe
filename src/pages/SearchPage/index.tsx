import * as React from "react";
import Image from "@assets/DishImg.png"
import { MedalImg } from "@assets/MedalImg";
import { CaloryImg } from "@assets/CaloryImg";
import RecypeLink from "@components/Layout/RecypeLink";
import ProductList from "@components/Layout/Lists/ProductList";
import IngredientList from "@components/Layout/Lists/IngredientList";

import * as Styled from "./styled"

export default function SearchPage() {
  return (
    <Styled.Container>
      <Styled.DishImg src = {Image}/>
      <Styled.InfoContainer>
        <Styled.InfoWrapper>
          <Styled.MealType>Meal type - {'lunch/dinne'}</Styled.MealType>
          <Styled.MealName>{'Pasta alla Gricia Recipe'}</Styled.MealName>
          
          <Styled.DishPropertiesContainer>
            <Styled.DishPropertiesWrapper>
              <CaloryImg/>
              <Styled.DishProp>{'630'} calories</Styled.DishProp>
            </Styled.DishPropertiesWrapper>
            <Styled.DishPropertiesWrapper>
              <MedalImg/>
              <Styled.DishProp>Cuisine Type - {'Mexican'}</Styled.DishProp>
            </Styled.DishPropertiesWrapper>
          </Styled.DishPropertiesContainer>

          <IngredientList />
          <ProductList />
          <RecypeLink/>
        </Styled.InfoWrapper>
      </Styled.InfoContainer>
    </Styled.Container>
  );
}
