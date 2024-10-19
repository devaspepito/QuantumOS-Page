import React, { useState, useEffect } from "react";
import { css } from "../../../../styled-system/css";

export const ColorScheme = () => {
  const [theme, SetTheme] = useState("dark");

  useEffect(() => {
    const rootDiv = document.getElementById("root");

    if (theme === "dark") {
      rootDiv.style.backgroundColor = "#031320";
    } else {
      rootDiv.style.backgroundColor = "#d0d8db";
    }
  }, [theme]);

  const toggleTheme = () => {
    SetTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      className={css({
        color: "whitesmoke",
        fontWeight: "bold",
        margin: "2",
        cursor: "pointer",
      })}
    >
      Change Theme
    </button>
  );
};
