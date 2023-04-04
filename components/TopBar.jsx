import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import NextLink from "next/link";
import styles from "../styles/TopBar.module.css";
import { Box } from "@mui/material";

const handleCloseNavMenu = () => {
  setAnchorElNav(null);
};

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
          <AppBar className={styles.appbar}>
            <Toolbar>
              <NextLink href='/' passHref>
                <a>
                  <Typography variant='h4' component='span'>
                    Monuments
                  </Typography>
                </a>
              </NextLink>
            </Toolbar>
            <Toolbar>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  display: "flex",

                  alignItems: "center",
                  "& > *": {
                    m: 1,
                  },
                }}
              >
                <NextLink
                  href='/pamyatnik'
                  passHref
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <a>
                    <Typography variant='h6' component='nav'>
                      Памятники
                    </Typography>
                  </a>
                </NextLink>
                <NextLink
                  href='/stupeni'
                  passHref
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <a>
                    <Typography variant='h6' component='nav'>
                      Сходи
                    </Typography>
                  </a>
                </NextLink>
                <NextLink
                  href='/brukivka'
                  passHref
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <a>
                    <Typography variant='h6' component='nav'>
                      Бруківка
                    </Typography>
                  </a>
                </NextLink>
                <NextLink
                  href='/vazy'
                  passHref
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <a>
                    <Typography variant='h6' component='nav'>
                      Вази
                    </Typography>
                  </a>
                </NextLink>
              </Box>
            </Toolbar>
          </AppBar>
        </header>
      </HideOnScroll>
    </>
  );
}
