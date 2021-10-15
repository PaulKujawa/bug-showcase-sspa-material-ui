import React from "react";

// not matching Webpack External
import { ThemeContext } from "../../component-library/src/ThemeContext";

export const Button = () => {
  const theme = React.useContext(ThemeContext) as any;

  return <div style={{ backgroundColor: theme.primary }}>Button component</div>;
};
