export const inputStyles = {
  // Styles for the visual style variations
  baseStyle: {
    field: {
      outline: "none !important",
      fontSize: "sm",
      border: "1px solid",

      _active: {
        borderColor: "#EEC584",
        boxShadow: "0 0 0 1px var(--chakra-colors-badge)",
      },
      _invalid: {
        borderColor: "red",
        boxShadow: "none",
      },
      _disabled: {
        bg: "gray",
        _placeholder: {
          color: "white",
        },
      },
    },
  },

  variants: {
    outline: {
      field: {
        color: "white",
        height: "50px",
        background: "#272727bd",
        borderColor: "#C8AB83",
        fontSize: "sm",

        _hover: {
          borderColor: "#EEC584",
        },
        _focus: {
          borderColor: "white",
          outline: "none",
          boxShadow: "0 0 0 1px var(--chakra-colors-badge)",
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        height: "45px",
        borderRadius: "4px",
        padding: "11px 12px",
      },
    },
    lg: {
      field: {
        height: "48px",
        borderRadius: "4px",
        padding: "16px 12px",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "outline",
  },
};
