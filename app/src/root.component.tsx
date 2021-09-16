import React from "react";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import Chip from "@mui/material/Chip";

const customTheme = createTheme({
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
