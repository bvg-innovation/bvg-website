import {
  Box,
  HStack,
  Text,
  Flex,
  Input,
  Button,
  Center,
} from "@chakra-ui/react";
import React from "react";

export const Suscribe = () => {
  return (
    <Flex align={"center"} justify={"center"} p={4} bgColor={"secondary.400"}>
      <Box p={5} width={"50%"} bgColor={"primary.400"} rounded={"lg"}>
        <HStack align={"center"} justify={"space-between"} p={1}>
          <Box
            bgImage={"/assets/images/suscribe/suscribe1.png"}
            bgRepeat={"none"}
            h={"25vh"}
            w={"20vw"}
            position={"relative"}
            bgSize={"cover"}
          />
          <Box position={"absolute"} width={"500px"}>
            <Text fontSize={"5xl"} color={"white"}>
              Build stronger customer relationships with Primchat
            </Text>
          </Box>
          <Flex>
            <Input />
            <Button>Submit</Button>
          </Flex>
          <Box />
        </HStack>
      </Box>
    </Flex>
  );
};
