import {combineReducers, legacy_createStore as createStore } from 'redux';
import { recipeReducer } from './reducers/recipeReducer';
import { searchReducer } from './reducers/searchReducer';
import { recipeListReducer } from './reducers/recipeListReducer';


const rootReducer = combineReducers({
    recipe: recipeReducer,
    search: searchReducer,
    list: recipeListReducer,
})
  
export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>