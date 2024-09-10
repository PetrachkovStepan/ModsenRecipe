import * as React from "react";
import * as Styled from "./styled"
import Image from "@assets/Rectangle 68.png"
import { ProductInterface } from "@utils/types/Lists";

export default function ProductCard(props:{key:string, item: ProductInterface}) { 
  return (
    <Styled.Container>
      <Styled.Image src ={props.item.image}/>
    </Styled.Container>
  );
}
