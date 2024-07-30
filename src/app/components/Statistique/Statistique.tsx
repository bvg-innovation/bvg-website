"use client";

import {
  Box,
  useBreakpointValue,
  Grid,
  GridItem,
  SimpleGrid,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

import { StatsDataTable } from "./components/StatsDataTable";
import { DataComponentOverview } from "./dummyStats";
import { BVG_CUSTOM_COLORS } from " _/app/theme/variables";
import { DataMobile } from "./components/StatsDataMobile";

export const Statistique = () => {
  const responsive = useBreakpointValue({
    base: "mobile",
    sm: "tablet",
    md: "web",
  });
  const { colorMode } = useColorMode();

  return (
    <Box p={5} width={"100%"}>
      {responsive === "web" ? (
        <Box width={"100%"}>
          <StatsDataTable
            valueColor={
              colorMode === "light"
                ? BVG_CUSTOM_COLORS.Primary
                : BVG_CUSTOM_COLORS.Secondary
            }
          />
        </Box>
      ) : (
        <SimpleGrid spacing={4} columns={2}>
          {DataComponentOverview?.map((value, index) => (
            <GridItem key={index}>
              <DataMobile
                value={value.value}
                subValue={value.subValue}
                description={value.description}
                valueColor={
                  colorMode === "light"
                    ? BVG_CUSTOM_COLORS.Primary
                    : BVG_CUSTOM_COLORS.Secondary
                }
              />
            </GridItem>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};
