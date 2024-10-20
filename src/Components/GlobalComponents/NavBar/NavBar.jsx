//import React from "react";
import { ColorScheme } from "../../StyleComponents/ColorScheme/ColorScheme";
import {
  ListStyled_1,
  Navigation,
  UnorderedList,
  Header,
} from "../Modules/StyledComponents";

export const NavBar = () => {
  return (
    <Header>
      <Navigation>
        <UnorderedList>
          <ListStyled_1>
            <a href="#">Home</a>
          </ListStyled_1>
          <ListStyled_1>
            <a href="#">About</a>
          </ListStyled_1>
          <ListStyled_1>
            <a href="#">Contact Us</a>
          </ListStyled_1>
          <ListStyled_1>
            <a href="#">Support Us</a>
          </ListStyled_1>
        </UnorderedList>
        <ColorScheme />
      </Navigation>
    </Header>
  );
};
