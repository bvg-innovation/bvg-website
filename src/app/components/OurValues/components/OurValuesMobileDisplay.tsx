import {
  Flex,
  SimpleGrid,
  VStack,
  Text,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { OurValuesData } from "../dummyOurValues";

export const OurValuesMobileDisplay = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex align={"center"} justify={"center"}>
      <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={5}>
        {OurValuesData?.map((values, index) => (
          <VStack
            key={index}
            rounded={"lg"}
            bgColor={colorMode === "light" ? "#F9F9F9" : "primary.500"}
            p={5}
            spacing={5}
            width={{ base: "350px", sm: "300px" }}
            align={"start"}
            boxShadow={"lg"}
          >
            <Flex align={"center"} justify={"center"} gap={5}>
              <Flex
                rounded={"lg"}
                width={{ base: "50px", sm: "70px" }}
                height={{ base: "50px", sm: "70px" }}
                bgColor={
                  colorMode === "light" ? "primary.500" : "secondary.500"
                }
                align={"center"}
                justify={"center"}
              >
                {values.icon}
              </Flex>
              <Text fontWeight={"bold"} fontSize={{ base: "18px", sm: "22px" }}>
                {values.title}
              </Text>
            </Flex>

            <VStack align={"start"}>
              <Text lineHeight={"30px"} textAlign={"justify"}>
                {values.description}
              </Text>
            </VStack>
          </VStack>
        ))}
      </SimpleGrid>
    </Flex>
  );
};
