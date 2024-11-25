import React, { useState, useEffect } from "react";
import { styled } from "../../../../styled-system/jsx";

const ChangeThemeButton = styled.button`
  color: whitesmoke;
  font-weight: bold;
  margin: 10px;
  cursor: pointer;
`;

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
    <ChangeThemeButton onClick={toggleTheme}>Change Theme</ChangeThemeButton>
  );
};
