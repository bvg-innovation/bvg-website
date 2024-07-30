import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

import { OurValuesComponent } from "./OurValuesComponent";

export const OurValues = () => {
  return (
    <Box>
      <Box>
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          direction={"column"}
          p={3}
        >
          <Flex
            color={"primary.500"}
            bgColor={"#EFECFF"}
            w={"170px"}
            h={"60px"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"20px"}
          >
            <Text fontSize={"20px"}>Nos valeurs</Text>
          </Flex>
          <Flex
            mt={"20px"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Box width={{ base: "250px", sm: "250px", md: "450px" }}>
              <Text
                fontWeight={"bold"}
                fontSize={{ base: "18px", md: "30px" }}
                textAlign={"center"}
              >
                Lhistoire et les valeurs derrière BVG-INNOVATIONS
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <OurValuesComponent />
    </Box>
  );
};
