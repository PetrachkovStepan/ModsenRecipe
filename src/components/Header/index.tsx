import * as React from "react";
import { Logo } from "../../assets/Logo";
import { BurgerButtonImg } from "@assets/BurgerButtonImg";

import * as Eblan from "./styled";

export default function Header() {
  return (
    <Eblan.Container>
      <Logo />
      <Eblan.DesktopContainer>
        <Eblan.NavLink>Home</Eblan.NavLink>
      </Eblan.DesktopContainer>
      <Eblan.MobileContainer>
      <BurgerButtonImg/>
      </Eblan.MobileContainer>
    </Eblan.Container>
  );
}
