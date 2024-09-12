import * as React from "react";

import { ProductInterface } from "@utils/types/Lists";

import * as Styled from "./styled"

export default function ProductCard(props:{key:string, item: ProductInterface}) { 
  return (
    <Styled.Container>
      <Styled.Image src ={props.item.image}/>
    </Styled.Container>
  );
}
