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
    next: string
}
export interface BurgerAction{
    type: string,
    payload: boolean,
}
export interface LoaderAction{
    type: string,
    payload: boolean,
}