import { Text, Box, SimpleGrid, Center, useColorMode } from "@chakra-ui/react";
import React, { FC } from "react";
import { DataComponentOverview } from "../dummyStats";
import { IDataComponent } from "../interface/stats";

export const StatsDataTable: FC<IDataComponent> = ({ valueColor }) => {
  const { colorMode } = useColorMode();
  return (
    <Center>
      <Box
        bgColor={colorMode === "light" ? "#F9F9F9" : "primary.500"}
        py={10}
        px={5}
        rounded="lg"
        shadow={"md"}
        textAlign="center"
        width={"80vw"}
      >
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {DataComponentOverview.map((stats, index) => (
            <Box key={index}>
              <Text fontSize={"32px"} fontWeight={"bold"}>
                {stats.value}
                <span style={{ color: valueColor, fontWeight: "bold" }}>
                  {stats.subValue}
                </span>
              </Text>
              <Text fontSize={"22px"}>{stats.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Center>
  );
};
