import { RecipeListAction } from "@utils/types/Actions";
import { RecipeListState } from "@utils/types/States";

export const SET_ITEMS = "SET_ITEMS";
export const ADD_ITEMS = "ADD_ITEMS";
export const NEXT_PAGE = "NEXT_PAGE";

const defaultState: RecipeListState = {
    items:[],
    href:"a"
  }
  
export const recipeListReducer = (state = defaultState, 
  action:RecipeListAction): RecipeListState => {
    switch (action.type){
        case SET_ITEMS:
            return{...state, items: action.payload}
        case ADD_ITEMS:
          console.log("action.payload")
          console.log(state)
          console.log(state.items)
          console.log(action.payload)
          console.log([...state.items,...action.payload])
            return{...state, items: [...state.items,...action.payload]}
        case NEXT_PAGE:
            return{...state, href: action.next}
      default:
        return state;
    }
  }