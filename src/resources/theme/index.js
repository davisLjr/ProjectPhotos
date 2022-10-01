import { extendTheme } from "@chakra-ui/react";
import { whiten } from "@chakra-ui/theme-tools";
import { inputStyles as Input } from "./form";

// darken  2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#EEC584",
    800: "#153e75",
    700: "#2a69ac",
  },
  white: "white",
  base: "#272727",
  baseTransp: "#272727bd",
  primary: "#2F9C95",
  secondary: "#40C9A2",
  gold: "#C8AB83",
  lightGold: "#EEC584",
  grayf: "#343434",
};

const shadows = {
  sm: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
};

const Button = {
  baseStyle: {
    color: "white",
    borderRadius: "5px",
    textTransform: "uppercase",
    paddingTop: "2.5px",
    boxShadow: "sm",
    fontFamily: "Raleway, sans-serif",
  },
  sizes: {
    sm: {
      lineHeight: "40px",
      fontSize: "10px",
      fontWeight: "semibold",
    },
    md: {
      height: "40px",
      maxHeight: "40px",
      fontSize: "xs",
    },
    lg: {
      height: "48px",
      maxHeight: "48px",
      fontSize: "xs",
    },
    xl: {
      height: "48px",
      maxHeight: "48px",
      fontSize: "xs",
      px: { base: "40px", lg: "70px" },
    },
  },
  variants: {
    solidPrimary: {
      color: "white",
      bg: "gold",
      _hover: {
        bg: whiten("gold", 20),
      },
    },
    outline: {
      color: "gold",
      bg: "white",
      border: "1px solid",
      borderColor: "gold",
      _hover: {
        borderColor: whiten("gold", 20),
      },
    },
    transp: {
      color: "white",
      bg: "transparent",
      border: "1px solid",
      borderColor: "white",
      marginTop: "10px",
      borderRadius: "0px",
      _hover: {
        borderColor: "transparent",
      },
    },
  },
};

const Link = {
  baseStyle: {
    letterSpacing: "0px",
    textDecoration: "none",
    _hover: {
      textDecoration: "none",
    },
  },
};

const fonts = {
  heading: "Raleway, sans-serif",
  body: "Raleway, sans-serif",
  link: "Raleway, sans-serif",
  text: "Aboreto, cursive",
};

const styles = {
  global: {
    html: {
      scrollBehavior: "smooth",
    },
    h1: {
      color: "white",
    },
  },
};
const fontSizes = {
  "2xs": "10px",
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "18px",
  xl: "20px",
  "2xl": "28px",
  "3xl": "34px",
  "4xl": "36px",
};

export const theme = extendTheme({
  colors,
  shadows,
  styles,
  fonts,
  fontSizes,
  components: {
    Button,
    Link,
    Input,
  },
});
