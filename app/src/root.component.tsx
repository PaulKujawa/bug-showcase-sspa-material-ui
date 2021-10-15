import React from "react";
import { Box, ThemeProvider } from "@pkujawa/components-library";
import { ThemeProvider as ThemeProviderNpm } from "../../component-library/src/ThemeProvider";
import { Button } from "./Button";

const CustomTheme = { primary: "CadetBlue" };

export default function Root() {
  return (
    <section>
      <ThemeProvider theme={CustomTheme}>
        <Box />

        <div style={{ marginBottom: "2rem" }} />

        <ThemeProviderNpm theme={CustomTheme}>
          <Button />
        </ThemeProviderNpm>
      </ThemeProvider>
    </section>
  );
}
