import React from "react";
import { useTheme } from "../context/ThemeContext";

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {isDark ? "Світла тема" : "Темна тема"}
    </button>
  );
};