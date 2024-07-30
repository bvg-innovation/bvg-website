import {
  Flex,
  SimpleGrid,
  HStack,
  VStack,
  Text,
  Heading,
  useBreakpointValue,
  GridItem,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { OurValuesData } from "./dummyOurValues";
import { OurValuesMobileDisplay } from "./components/OurValuesMobileDisplay";

export const OurValuesComponent = () => {
  const responsive = useBreakpointValue({
    base: "mobile",
    sm: "tablet",
    md: "web",
  });
  const { colorMode } = useColorMode();

  return (
    <Flex align={"center"} justify={"center"} mt={"40px"}>
      {responsive === "web" ? (
        <SimpleGrid columns={2} spacing={5}>
          {OurValuesData?.map((values, index) => (
            <GridItem
              boxShadow={"lg"}
              key={index}
              width={{ md: "400px", lg: "500px" }}
            >
              <HStack
                rounded={"lg"}
                bgColor={colorMode === "light" ? "#F9F9F9" : "primary.500"}
                p={5}
                spacing={5}
                boxShadow={"lg"}
              >
                <Flex
                  rounded={"lg"}
                  width={"300px"}
                  height={"100px"}
                  bgColor={
                    colorMode === "light" ? "primary.500" : "secondary.500"
                  }
                  align={"center"}
                  justify={"center"}
                >
                  {values.icon}
                </Flex>
                <VStack align={"start"}>
                  <Text fontSize={"20px"} fontWeight={"bold"}>
                    {values.title}
                  </Text>
                  <Text lineHeight={"30px"}>{values.description}</Text>
                </VStack>
              </HStack>
            </GridItem>
          ))}
        </SimpleGrid>
      ) : (
        <OurValuesMobileDisplay />
      )}
    </Flex>
  );
};
