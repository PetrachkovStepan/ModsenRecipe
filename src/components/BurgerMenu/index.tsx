import * as React from "react"
import * as Styled from "./styled"
import BackHomeButton from "@components/Layout/BackHomeButton"

function BurgerMenu() {
  return (
    <Styled.Container id = {"sideWrapper"}>
      <BackHomeButton/>
    </Styled.Container>
  )
}

export default BurgerMenu