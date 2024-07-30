import type { StyleConfig } from "@chakra-ui/react";

export const TextStyles: Record<string, StyleConfig> = {
  Text: {
    baseStyle: {},
    variants: {
      "panel-title": {
        fontSize: "16px",
        fontWeight: "bold",
        color: "secondary.500",
        size: "md",
      },
      "helper-text": {
        fontSize: "sm",
        fontWeight: "500",
        color: "#849292",
      },
    },
  },
};
