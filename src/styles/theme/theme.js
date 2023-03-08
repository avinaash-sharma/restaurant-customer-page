import {
    extendTheme,
    withDefaultColorScheme,
    withDefaultVariant,
  } from "@chakra-ui/react";
  import { mode } from "@chakra-ui/theme-tools";
  
  const inputSelectStyles = {
    variants: {
      filled: {
        field: {
          _focus: {
            borderColor: "brand.500"
          }
        }
      },
    },
    sizes: {
      md: {
        field: {
          borderRadius:"md"
        }
      }
    }
  };
  
  const brandRing = {
    _focus: {
      ring: 2,
      ringColor: "brand.500"
    }
  };
  
  const theme = extendTheme(
    {
      colors: {
        brand: {
          50: "#edf6e9",
          100: "#dbedd3",
          200: "#c9e4bd",
          300: "#b8dba7",
          400: "#a6d291",
          500: "#94c97b",
          600: "#83c065",
          700: "#71b74e",
          800: "#5fae38",
          900: "#B0883C"
        },
        primary: "#2C3333",
        secondary: "#2E4F4F",
        primaryText: "#CBE4DE",
        secondaryText: "#0E8388"
      },
      components: {
        Button: {
          variants: {
            primary: props => ({
              rounded: "xl",
              ...brandRing,
              color: mode("white", "gray.800")(props),
              backgroundColor: mode("brand.900", "brand.200")(props),
  
              _hover: {
                backgroundColor: mode("brand.900")(props),
                transform: 'scale(1.3)'
              },
  
              _active: {
                backgroundColor: mode("brand.900")(props)
              }
            })
          }
        },
        Input: { ...inputSelectStyles },
        Select: { ...inputSelectStyles },
        Checkbox: {
          baseStyle: {
            control: {
              borderRadius: "md",
              ...brandRing
            }
          }
        }
      }
    },
    withDefaultColorScheme({
      colorScheme: "brand",
      components: ["Checkbox"]
    }),
    withDefaultVariant({
      variant: "filled",
      components: ["Input", "Select"]
    })
  );
  
  export default theme;
  