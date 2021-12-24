import React, { useEffect, useState } from "react";

import { Link as RouterLink } from "react-router-dom";

import {
  AppBar,
  Box,
  Button,
  Slide,
  Tab,
  Tabs,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";

// import styled from system
import { bgcolor, palette, styled } from "@mui/system";

// deprecated styling (matches tutorial)
import { makeStyles } from "@mui/styles";

import logo from "../../assets/logo.svg";

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    threshold: 100,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

// Deprecated JSS + Hook method
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
}));

// Emotion styled syntax
const StyledCushion = styled(Box)(({ theme }) => {
  return {
    marginTop: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(8),
    },
    // marginBottom: "7.5em",
  };
});

// Styled Components Syntax
const CushionSC = styled("div")(({ theme }) => {
  return `
  margin-top: ${theme.spacing(8)};
  @media(max-width: ${theme.breakpoints.values.sm}px) {
    margin-top: ${theme.spacing(7)};
  }`;
  // margin-bottom: 7.5em;
});

const HeaderLogo = styled("img")({
  height: "7em",
});

const HeaderTab = styled(Tab)(({ theme }) => ({
  ...theme.typography.tab,
  minWidth: 10,
  marginLeft: "25px",
}));

export default function Header(props) {
  // const classes = useStyles(); // <-- Hook for deprecated styling method
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/about" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/contact" && value !== 2) {
      setValue(2);
    }
  }, [value]);

  const handleChange = (e, value) => {
    setValue(value);
  };

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            bgcolor: "primary",
          }}
        >
          <Toolbar disableGutters>
            {/* <img alt="company logo" src={logo} /> */}
            <Button
              to="/"
              component={RouterLink}
              onClick={() => setValue(0)}
              sx={{ p: 0 }}
              disableRipple
            >
              <HeaderLogo alt="company logo" src={logo} />
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="secondary"
              sx={{
                ml: "auto",
              }}
            >
              <HeaderTab label="Home" to="/" component={RouterLink} />
              <HeaderTab label="About Me" to="/about" component={RouterLink} />
              <HeaderTab
                label="More About ME!!!"
                to="/contact"
                component={RouterLink}
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                borderRadius: "50px",
                ml: "50px",
                mr: "25px",
                fontSize: "1rem",
                height: "45px",
                textTransform: "none",
              }}
            >
              What Up???
            </Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Deprecated UseStyles Method */}
      {/* <div className={classes.toolbarMargin} /> */}

      {/* Inline styling with sx (the system) */}
      <Box
        sx={{
          // marginTop: {
          //   xs: 7,
          //   sm: 8,
          // },
          // alternatively:
          mt: [7, 8],
          mb: "7.5em",
        }}
      />

      {/* <StyledCushion /> */}
      {/* <CushionSC /> */}
    </>
  );
}
