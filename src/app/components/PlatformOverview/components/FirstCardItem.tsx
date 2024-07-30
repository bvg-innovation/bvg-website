import { Box, Flex, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { IPlatform } from "../interface/platform";
import Image from "next/image";

export const FirstCardItem = ({ icon, title, description }: IPlatform) => {
  const MotionText = motion(Text);
  const MotionButton = motion(Button);
  const MotionHeading = motion(Heading);
  const MotionImage = motion(Image);
  const MotionBox = motion(Box);

  return (
    <Flex
      bgColor={"#F8F8F8"}
      align={"center"}
      justify={"space-between"}
      borderRadius={"10px"}
      width={{ base: "100%", md: "400px" }}
      height={{ base: "100%", md: "270px" }}
      boxShadow={"lg"}
    >
      <VStack spacing={6} align={"start"} p={5}>
        <Image alt="test-button" src={icon} width={150} height={150} />
        <Heading color={"black"} fontSize={{ base: "16px", md: "18px" }}>
          {title}
        </Heading>
        <Text color={"black"} fontSize={{ base: "16px", md: "18px" }}>
          {description}
        </Text>
      </VStack>
    </Flex>
  );
};
