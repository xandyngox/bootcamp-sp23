import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    notiom: {
      blue: "#2F80ED",
      dgrey: "#545454",
      mgrey: "#A3A3A3",
      lgrey: "#F8F8F8",
    },
  },

  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
  styles: {
    global: {
      "*": {
        boxSizing: "border-box",
      },
      "html, body": {
        padding: 0,
        margin: 0,
        height: "100%",
        width: "100%",
      },
      a: {
        color: "inherit",
        textDecoration: "none",
      },
    },
  },
  components: {
    Box: {
      baseStyle: {
        overflowWrap: "anywhere",
      },
    },
    Text: {
      baseStyle: {
        overflowWrap: "anywhere",
      },
    },
    Button: {
      variants: {
        blue: {
          bg: "notiom.blue",
          color: "white",
          _hover: {
            bg: "notiom.lightBlue",
            _active: {
              bg: "notiom.lightBlue",
            },
          },
        },
      },
    },
  },
});
