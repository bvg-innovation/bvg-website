import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { IPlatform } from "../interface/platform";
import Image from "next/image";

export const CardItem = ({
  icon,
  image,
  title,
  description,
  bgColor,
}: IPlatform) => {
  const MotionText = motion(Text);
  const MotionButton = motion(Button);
  const MotionHeading = motion(Heading);
  const MotionImage = motion(Image);
  const MotionBox = motion(Box);
  const responsive = useBreakpointValue({
    base: "mobile",
    sm: "tablet",
    md: "web",
  });
  return (
    <Flex
      bgColor={"#F8F8F8"}
      align={"center"}
      justify={"center"}
      borderRadius={"10px"}
      p={5}
      boxShadow={"lg"}
    >
      <VStack
        spacing={6}
        align={"start"}
        width={{ base: "auto", md: "300px", xl: "500px" }}
      >
        <Image alt="test-button" src={icon} width={150} height={150} />
        <Heading color={"black"} fontSize={"22px"}>
          {title}
        </Heading>
        <Text color={"black"} fontSize={{ base: "16px", md: "18px" }}>
          {description}
        </Text>
      </VStack>

      {(image && responsive === "web") || responsive === "tablet" ? (
        <Box bgColor={bgColor ?? "none"} me={6}>
          <Image alt="hero-image" src={image ?? ""} width={300} height={300} />
        </Box>
      ) : null}
    </Flex>
  );
};
