//import React from "react";
import { css } from "../../../../styled-system/css";
import { ColorScheme } from "../../StyleComponents/ColorScheme/ColorScheme";

export const NavBar = () => {
  return (
    <header
      className={css({
        width: "100%",
        height: "10%",
      })}
    >
      <nav
        className={css({
          backgroundColor: "blue.950",
          width: "80%",
          height: "50%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          margin: "18px auto",
          borderRadius: "xl",
          borderWidth: "20px",
          border: "whitesmoke",
          position: "sticky",
        })}
      >
        <ul
          className={css({
            display: "flex",
            color: "whitesmoke",
            flexDirection: "row",
            fontWeight: "bold",
          })}
        >
          <li
            className={css({
              margin: "2",
            })}
          >
            <a href="#">Home</a>
          </li>
          <li
            className={css({
              margin: "2",
            })}
          >
            <a href="#">About</a>
          </li>
          <li
            className={css({
              margin: "2",
            })}
          >
            <a href="#">Contact Us</a>
          </li>
          <li
            className={css({
              margin: "2",
            })}
          >
            <a href="#">Support Us</a>
          </li>
        </ul>
        <ColorScheme />
      </nav>
    </header>
  );
};
