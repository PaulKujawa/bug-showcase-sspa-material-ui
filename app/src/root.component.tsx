import React from "react";
import { Button } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const customTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#cce4ff",
      main: "#07f",
      dark: "#0037FF",
    },
  },
});

export default function Root(props) {
  return (
    <section>
      <ThemeProvider theme={customTheme}>
        <Button color="primary" variant="contained">
          from browser
        </Button>

        <Chip label="Dqw" color="primary" />
      </ThemeProvider>
    </section>
  );
}
