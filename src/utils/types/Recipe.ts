import { IngredientListInterface, MealTypeListInterface } from "./Lists";

export interface Recipe {
    label:string,
    calories: number,
    cuisineType: string,
    dishType: string,
    image: string,
    ingredients: IngredientListInterface,
    mealType: MealTypeListInterface,
    url: string,
}