import * as React from "react";

import { useDispatch } from "react-redux";

import { SearchImg } from "@assets/SearchImg";
import { SEARCH_LINE } from "@store/reducers/searchReducer";

import * as Styled from "./styled";

export default function SearchBar() {
  const dispatch = useDispatch()
  const [searchText, setSearchText] = React.useState("")
  const search = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    dispatch({type: SEARCH_LINE, payload: searchText})
  }
  
  return (
    <Styled.Container>
      <Styled.Input placeholder = "Search Your Favorite Food"
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => {setSearchText(e.target.value)}} 
                value={searchText}/>
      <Styled.Img onClick={search}>
        <SearchImg/>
      </Styled.Img>
    </Styled.Container>
);
}
