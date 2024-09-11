import { RecipeInterface } from "./Lists";
import { Recipe } from "./Recipe";

export interface RecipeState{
    uri: string,
}
export interface RecipeListState{
    items: RecipeInterface[],
    href: string,
}
export interface SearchState {
    searchLine: string;
    [index: string]: string;
  }
 
export interface BurgerState {
    isOpen: boolean
  }
export interface LoaderState {
    isOpen: boolean
  }