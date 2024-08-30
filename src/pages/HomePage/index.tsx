// import {Container, Title, Text} from "./styled"

import { SearchBar } from "../../components/Layout/SearchBar"
import { Selector } from "../../components/Layout/Selector"
import { RecipeList } from "../../components/Layout/Lists/RecipeList"

// Используем эти компоненты внутри нашего JSX!
export const HomePage = () => (
  <>
    <SearchBar/>
    <Selector></Selector>
    <Selector></Selector>
    <RecipeList/>
  </>
)