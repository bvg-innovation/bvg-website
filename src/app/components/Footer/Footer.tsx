import {
  Box,
  HStack,
  VStack,
  Text,
  Flex,
  Divider,
  Link,
  useColorMode,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { SocialLinks } from "./socialLinks";
import CustomTooltip from "../CustomTooltip/CustomTooltip";
import Image from "next/image";
import { Links } from " _/app/components/HeroHeader/dummyLinks";

export const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      p={10}
      bgColor={colorMode === "light" ? "primary.500" : "secondary.500"}
    >
      <Flex
        direction={{ base: "column", sm: "row", md: "row" }}
        align={{ base: "center", md: "flex-start" }}
        gap={{ base: 10, md: 20 }}
      >
        <Box
          p={5}
          bgColor={"white"}
          borderRadius={"20px"}
          width={{ base: "100%", sm: "400px", md: "350px" }}
        >
          <VStack align={"start"} justify={"start"} spacing={3} p={2}>
            <Flex align={"center"} justifyContent={"center"} gap={2}>
              <Box
                width={{ base: "50px", sm: "60px" }}
                height={{ base: "50px", sm: "60px" }}
                borderRadius="9px"
                bgColor="#F5F5F5"
                boxShadow={"lg"}
              >
                <Image
                  alt="hero-image"
                  width={65}
                  height={65}
                  src="/assets/logo/losange-icon.png"
                />
              </Box>
              <Text
                color="black"
                fontSize={{ base: "xl", sm: "2xl" }}
                fontWeight="extrabold"
              >
                BVG - INNOVATION
              </Text>
            </Flex>

            <Flex gap={4} direction={"column"}>
              <Text color="black">
                1811 Silverside Rd, Wilmington, DE 19810, USA
              </Text>
              <Text color="black">US: +1 (001) 256-0034</Text>
              <Text color="black">email: contact@bvg-innovation.tech</Text>
            </Flex>
          </VStack>
        </Box>
        <HStack
          align={"start"}
          spacing={{ base: 5, md: 10 }}
          flexDirection={{ sm: "column", md: "column" }}
        >
          {Links?.map((link, index) => (
            <Text
              _hover={{ color: "secondary.200" }}
              fontSize={"18px"}
              key={index}
              color={"white"}
            >
              {link.title}
            </Text>
          ))}
        </HStack>
      </Flex>

      <Box mt={"20px"}>
        <Flex align={"flex-start"} justify={{ base: "center", md: "flex-end" }}>
          <Divider width={{ base: "100%", md: "100%" }} />
        </Flex>
      </Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
        justify={{ base: "flex-start", md: "space-between" }}
        width={{ base: "100%", md: "80%", lg: "60%", "2xl": "35%" }}
        mt={"10px"}
      >
        <Flex
          align={{ base: "flex-start", md: "center" }}
          justify={{ base: "flex-start", md: "center" }}
          mb={{ base: 5, md: 0 }}
        >
          <Flex gap={5}>
            <Text color={"white"}>Follow Us : </Text>
            {SocialLinks?.slice(0, 2)?.map((links, index) => (
              <CustomTooltip
                placement={"bottom-start"}
                label={links.title}
                key={index}
              >
                <Link key={index} href={links.link} isExternal>
                  {links.icon}
                </Link>
              </CustomTooltip>
            ))}
          </Flex>
        </Flex>
        <Box width={{ base: "100%", md: "50%" }}>
          <Text color={"white"} fontSize={"16px"}>
            Copyright © 2024 BVG-INNOVATION
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
