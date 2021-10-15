import React from "react";
import { Theme } from "./Theme";
import { ThemeContext } from "./ThemeContext";

interface Props {
  theme: Theme;
  children: React.ReactNode;
}

export const ThemeProvider = ({ theme, children }: Props) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
