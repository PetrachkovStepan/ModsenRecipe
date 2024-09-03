import SearchPage from "../SearchPage";
import Page404 from "../Page404";
import HomePage from "../HomePage";
import * as React from "react";

export default function Outlet() {
  return (
    < >
      <HomePage />
      <SearchPage />
      <Page404 />
    </>
  );
}
