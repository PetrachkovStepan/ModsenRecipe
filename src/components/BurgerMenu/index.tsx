import * as React from "react"

import BackHomeButton from "@components/Layout/BackHomeButton"

import * as Styled from "./styled"

function BurgerMenu() {
  return (
    <Styled.Container id = {"sideWrapper"}>
      <BackHomeButton/>
    </Styled.Container>
  )
}

export default BurgerMenu