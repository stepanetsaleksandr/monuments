import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Slide, useScrollTrigger } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#044a90",
    },
    secondary: {
      main: "#b02748",
    },
    info: {
      main: "#00bcd4",
    },
  },
});

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          flexGrow: 1,
          backgroundImage: "radial-gradient(white, lightslategray)",
        }}
      >
        <Box sx={{ maxWidth: "100%", overflowX: "hidden" }}>
          <HideOnScroll>
            <AppBar
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "rgba(50, 50, 50, 0.2)",
              }}
            >
              <Toolbar>
                <NextLink href='/' passHref>
                  <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    Monuments
                  </Typography>
                </NextLink>
              </Toolbar>
              <Toolbar
                sx={{
                  display: "flex",
                  alignItems: "center",
                  "& > *": {
                    m: 1,
                  },
                  "@media (max-width: 960px)": {
                    display: "none",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "350px",
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                    "@media (max-width: 960px)": {
                      display: "none",
                    },
                    justifyContent: "space-between",
                  }}
                >
                  <NextLink
                    href='/pamyatnik'
                    passHref
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    <Typography variant='h6' component='nav'>
                      Памятники
                    </Typography>
                  </NextLink>
                  <NextLink
                    href='/stupeni'
                    passHref
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    <Typography variant='h6' component='nav'>
                      Сходи
                    </Typography>
                  </NextLink>
                  <NextLink
                    href='/brukivka'
                    passHref
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    <Typography variant='h6' component='nav'>
                      Бруківка
                    </Typography>
                  </NextLink>
                  <NextLink
                    href='/vazy'
                    passHref
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    <Typography variant='h6' component='nav'>
                      Вази
                    </Typography>
                  </NextLink>
                </Box>
              </Toolbar>
            </AppBar>
          </HideOnScroll>

          <Box
            sx={{
              p: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Layout;
