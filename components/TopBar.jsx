import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import NextLink from "next/link";

import { Box } from "@mui/material";

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

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <header>
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
                <Typography variant='h4' component='span'>
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
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  "@media (max-width: 960px)": {
                    display: "none",
                  },
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
        </header>
      </HideOnScroll>
    </>
  );
}
