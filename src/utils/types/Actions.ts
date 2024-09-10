import { Recipe } from "./Recipe";

export interface RecipeAction{
    type: string,
    payload: string,
} 
export interface SearchAction {
    type: string;
    payload: string;
}