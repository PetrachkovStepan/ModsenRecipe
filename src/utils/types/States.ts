import { Recipe } from "./Recipe";

export interface RecipeState{
    uri: string,
}
export interface SearchState {
    searchLine: string;
    [index: string]: string;
  }
 