//import React from "react";
import { Link } from 'react-router-dom';
import {
  ListNavBarStyled,
  Navigation,
  UnorderedListNavBar,
  Header,
} from "../../CssModules/Modules/StyledComponents";
import { Switch } from "../../StyleComponents/ColorScheme/SwitchTheme";

export const NavBar = () => {
  return (
    <Header>
      <Navigation>
        <UnorderedListNavBar>
          <ListNavBarStyled>
            <Link to="/">Home</Link>
          </ListNavBarStyled>
          <ListNavBarStyled>
            <Link to="/about">About</Link>
          </ListNavBarStyled>
          <ListNavBarStyled>
            <Link to="/contact-us">Contact Us</Link>
          </ListNavBarStyled>
          <ListNavBarStyled>
            <Link to="/support-us">Support Us</Link>
          </ListNavBarStyled>
          <ListNavBarStyled>
            <Link to="/download">Download</Link>
          </ListNavBarStyled>
        </UnorderedListNavBar>
        <Switch />
      </Navigation>
    </Header>
  );
};
