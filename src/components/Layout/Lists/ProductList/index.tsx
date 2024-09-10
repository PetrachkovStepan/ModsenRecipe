import * as React from "react";
import ProductCard from "../ProductCard";
import * as Styled from "./styled"
import { ProductListInterface } from "@utils/types/Lists";

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
