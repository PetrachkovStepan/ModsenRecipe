import * as React from "react";
import ProductCard from "../ProductCard";
import * as Styled from "./styled"

export default function ProductList() {
  return (
    <Styled.Container>
      <Styled.Text>Products</Styled.Text>
      <Styled.ListContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Styled.ListContainer>
    </Styled.Container>
  );
}
