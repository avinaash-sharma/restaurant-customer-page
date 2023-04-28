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
      ringColor: "brand.900"
    }
  };
  
  const theme = extendTheme(
    {
      colors: {
        brand: {
          
          900: "#B0883C"
        },
        primary: "#2c3139",
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
                transform: 'scale(1.12)'
              },
  
              _active: {
                backgroundColor: mode("primaryText")(props)
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
  