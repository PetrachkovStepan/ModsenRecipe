import { BLUE, BROWN, WHITE } from "@constants/colors";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  height:100%;
  @media (width < 1024px) {
    flex-direction: column;
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
    max-width: 760px;
    width: 100%;
    border-radius:28px;
    background-color: ${BLUE}
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 75px 17px 75px 20px;
    @media (width < 1024px) {
      margin: 20px 17px 20px 17px;
    }
`;
export const DishPropertiesContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top:78px;
    @media (width < 1024px) {
      flex-direction:column;
      gap: 25px;
    }
`;
export const DishPropertiesWrapper = styled.div`
  display:flex;
  align-items: center;
`;
export const MealType = styled.span`
    font-size: 13px;
    color: ${BROWN}
`
export const MealName = styled.span`
    font-size: 40px;
    margin-top:10px;
    color: ${WHITE};
    @media (width < 1024px) {
      font-size: 30px;
    }
`
export const DishProp = styled.span`
    font-size: 16px;
    margin-left:15px;
    margin-right: 45px;
    color: ${WHITE};
`
export const DishImg = styled.img`
    height: 520px;
    @media (width < 1024px) {
      height: 320px;
    }
`