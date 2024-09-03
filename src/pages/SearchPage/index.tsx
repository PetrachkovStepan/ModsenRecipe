import * as React from "react";
import IngredientList from "../../components/Layout/Lists/IngredientList";
import ProductList from "../../components/Layout/Lists/ProductList";

export default function SearchPage() {
  return (
    <>
      <IngredientList />
      <ProductList />
    </>
  );
}
