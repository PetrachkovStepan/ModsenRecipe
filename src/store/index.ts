import {combineReducers, legacy_createStore as createStore } from 'redux';
import { recipeReducer } from './reducers/recipeReducer';
import { searchReducer } from './reducers/searchReducer';
import { recipeListReducer } from './reducers/recipeListReducer';
import { burgerMenuReducer } from './reducers/burgerMenuReducer';


const rootReducer = combineReducers({
    recipe: recipeReducer,
    search: searchReducer,
    list: recipeListReducer,
    burger: burgerMenuReducer,
})
  
export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>