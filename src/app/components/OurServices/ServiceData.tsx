"use client";

import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IService } from "./interface/service";
import Image from "next/image";

const ServiceCard = ({ icon, title, description }: IService) => {
  const MotionBox = motion(Box);

  return (
    <MotionBox
      bgColor={"#F9F9F9"}
      borderRadius="12px"
      width={{ base: "250px", sm: "300px", xl: "350px" }}
      boxShadow={"lg"}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      p={4}
    >
      <HStack spacing={4}>
        <Flex width={"50%"}>
          <Image alt={"service-icon"} src={icon} width={200} height={200} />
        </Flex>
        <Flex>
          <Text
            fontWeight={"bold"}
            fontSize={{ base: "18px", md: "22px" }}
            textAlign={"start"}
            color={"black"}
          >
            {title}
          </Text>
        </Flex>
      </HStack>
      <Box mt={"20px"}>
        <Text
          color={"gray.700"}
          fontSize={{ base: "16px", md: "18px" }}
          textAlign={"center"}
        >
          {description}
        </Text>
      </Box>
    </MotionBox>
  );
};

export default ServiceCard;
