import {combineReducers, legacy_createStore as createStore } from 'redux';
import { recipeReducer } from './reducers/recipeReducer';
import { searchReducer } from './reducers/searchReducer';


const rootReducer = combineReducers({
    recipe: recipeReducer,
    search: searchReducer
})
  
export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>