import { RecipeInterface } from "./Lists";
import { Recipe } from "./Recipe";

export interface RecipeState{
    uri: string,
}
export interface RecipeListState{
    items: RecipeInterface[],
}
export interface SearchState {
    searchLine: string;
    [index: string]: string;
  }
 