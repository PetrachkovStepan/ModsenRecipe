import * as React from "react";
import * as Styled from "./styled";
import { DIET_CATEGORIES } from "@store/actions/searchActions";
import { useDispatch } from "react-redux";

export default function Selector(props:{params:string[], actionType: string}) {
  const dispatch = useDispatch()
  const search = async (target:string) => {
    dispatch({type: props.actionType, payload: target})
  }

  return (
  <Styled.Container>
    <Styled.Select onChange={(e: { target: { value: any; }; }) => search(e.target.value)}>
      {
        props.params.map(param => {
          return (
            <Styled.Option key={param} value={param}>{param}</Styled.Option>
          )
        })
      }
    </Styled.Select>
  </Styled.Container>
  );
}

