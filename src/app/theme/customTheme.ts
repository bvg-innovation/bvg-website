// File path: /path/to/your/theme/customTheme.ts
import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import breakpoints from "./breakpoints";
import colors from "./colors";
import { fontSizes, lineHeights } from "./fontSize";
import { TextStyles } from "./TextStyle";
import StyledTooltip from "./ToolTipStyle";
import { MyCalenderIcon } from "../../../assets/svg";

export const theme = () => {
  const config: ThemeConfig = {
    initialColorMode: "system",
    useSystemColorMode: true,
  };
  return extendTheme({
    config,
    colors,
    fonts: {
      body: "lato-regular",
    },
    fontSizes,
    lineHeights,
    breakpoints,
    styles: {
      global: (props: any) => ({
        html: {
          fontSize: "16px",
          WebkitUserSelect: "none",
          msUserSelect: "none",
          userSelect: "none",
        },
        body: {
          backgroundColor: props.colorMode === "light" ? "white" : "black",
          color: props.colorMode === "light" ? "black" : "white",
        },
        _focus: {
          boxShadow: "none !important",
        },
        _dataFocus: {
          boxShadow: "none !important",
        },
        "&::-webkit-scrollbar": {
          width: "4px",
          height: "4px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
          height: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "rgba(194, 199, 202, 1)",
          borderRadius: "24px",
        },
        input: {
          "&::-webkit-calendar-picker-indicator": {
            background: `url(${MyCalenderIcon}) no-repeat`,
            width: "11px",
            backgroundSize: "contain",
          },
        },
        label: {
          _disabled: {
            opacity: "1 !important",
          },
        },
      }),
    },
    components: {
      Button: {
        baseStyle: {
          color: "lightgrey",
        },
        variants: {
          solid: (props: any) => ({
            bg: props.colorMode === "light" ? "primary.500" : "secondary.500",
            _hover: {
              bg: props.colorMode === "light" ? "primary.600" : "secondary.600",
            },
            _active: {
              bg: props.colorMode === "light" ? "primary.700" : "secondary.500",
            },
          }),
        },
      },
      ...StyledTooltip,
      ...TextStyles,
    },
  });
};

export default theme;
