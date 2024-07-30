"use client";

import React from "react";
import { Box, Flex, Text, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceData";
import { services } from "./dummyServices";

const ServicesSection = () => {
  const MotionText = motion(Text);

  const boxVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: 0.2,
      },
    },
  };

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
            <Text fontSize={"xl"}>Nos Services</Text>
          </Flex>
          <Flex
            mt={"20px"}
            alignItems={"center"}
            justifyContent={"center"}
            maxW={{ base: "100%", sm: "65%", lg: "35%", md: "100%" }}
            flexDirection={"column"}
            p={3}
          >
            <Box mb={"10px"}>
              <MotionText
                fontWeight={"bold"}
                fontSize={{ base: "18px", md: "28px" }}
                textAlign={"center"}
                variants={boxVariants}
                initial="hidden"
                animate="visible"
              >
                Des services mis à votre disposition pour booster votre
                productivité
              </MotionText>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Box width={"100%"}>
        <Flex
          p={3}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 2, lg: 3, xl: 3, "2xl": 3 }}
            spacing={6}
          >
            {services?.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                description={service.description}
                title={service.title}
              />
            ))}
          </SimpleGrid>
        </Flex>
      </Box>
    </Box>
  );
};

export default ServicesSection;
