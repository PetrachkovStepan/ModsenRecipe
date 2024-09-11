import { RecipeInterface } from "./Lists";
import { Recipe } from "./Recipe";

export interface RecipeAction{
    type: string,
    payload: string,
} 
export interface SearchAction {
    type: string;
    payload: string;
}
export interface RecipeListAction{
    type: string,
    payload: RecipeInterface[],
}