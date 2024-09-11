import { RecipeListAction } from "@utils/types/Actions";
import { RecipeListState } from "@utils/types/States";

export const SET_ITEMS = "SET_ITEMS";
export const ADD_ITEMS = "ADD_ITEMS";

const defaultState: RecipeListState = {
    items:[]
  }
  
export const recipeListReducer = (state = defaultState, 
  action:RecipeListAction): RecipeListState => {
    switch (action.type){
        case SET_ITEMS:
            return{...state, items: action.payload}
        case ADD_ITEMS:
            return{...state, items: action.payload}
      default:
        return state;
    }
  }