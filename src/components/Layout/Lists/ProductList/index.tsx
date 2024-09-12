import * as React from "react";

import { ProductListInterface } from "@utils/types/Lists";

import * as Styled from "./styled"
import ProductCard from "../ProductCard";

export default function ProductList({items}:ProductListInterface) {
  return (
    <Styled.Container>
      <Styled.Text>Products</Styled.Text>
      <Styled.ListContainer>
        {
          items.map((item) =>
              <ProductCard key={item.image} item={item}/>
        )}
      </Styled.ListContainer>
    </Styled.Container>
  );
}
