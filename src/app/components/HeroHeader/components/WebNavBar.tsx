import {
  useBreakpointValue,
  Button,
  Flex,
  ButtonGroup,
  Text,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import { motion, useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Links } from "../dummyLinks";
import Image from "next/image";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { NavBar } from " _/app/components/HeroHeader/components/NavBar";

export const WebNavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const MotionText = motion(Text);
  const MotionButton = motion(Button);
  const MotionImage = motion(Image);
  const MotionBox = motion(Box);
  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [animationsPlayed, setAnimationsPlayed] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!animationsPlayed && scrollYProgress.get() > 0.1) {
      setAnimationsPlayed(true);
    }
  }, [scrollYProgress, animationsPlayed]);

  const responsiveMode = useBreakpointValue({
    base: "mobile",
    sm: "tablet",
    md: "web",
  });

  return (
    <Flex
      align={"center"}
      justify={"space-between"}
      p={4}
      bg={isScrolled ? "primary.500" : "none"}
      position="fixed"
      width="100%"
      zIndex="10000"
    >
      <Flex
        align={"center"}
        justifyContent={"flex-start"}
        gap={2}
        width={{ md: "30vw", lg: "22vw" }}
      >
        <MotionBox
          width={{ md: "45px", lg: "65px" }}
          height={{ md: "45px", lg: "65px" }}
          borderRadius="9px"
          bgColor="#F5F5F5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <MotionImage
            alt="hero-image"
            width={65}
            height={65}
            src="/assets/logo/losange-icon.png"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </MotionBox>
        <MotionText
          fontSize={{ md: "14px", lg: "18px" }}
          fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          color={colorMode === "light" && !isScrolled ? "black" : "white"}
        >
          BVG - INNOVATION
        </MotionText>
      </Flex>
      <Flex
        w={{ md: "45vw", lg: "40vw" }}
        align={"center"}
        justify={"space-between"}
        p={4}
      >
        {Links?.map((link, index) => (
          <MotionText
            _hover={{ color: "secondary.200" }}
            key={index}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            whileHover={{ scale: 1.1 }}
            color={colorMode === "light" && !isScrolled ? "black" : "white"}
          >
            {link.title}
          </MotionText>
        ))}
      </Flex>

      <Flex align={"flex-end"}>
        <ButtonGroup spacing={2}>
          <MotionButton
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            color={"white"}
            bgColor={"primary.500"}
            _hover={{ backgroundColor: "primary.500" }}
          >
            Contact us
          </MotionButton>

          <MotionButton
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            bgColor={"secondary.500"}
            color={"white"}
            _hover={{ backgroundColor: "secondary.500" }}
          >
            Book a schedule
          </MotionButton>
          <MotionButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleColorMode}
            bgColor={"transparent"}
            _hover={{ backgroundColor: "transparent" }}
            _active={{ backgroundColor: "transparent" }}
          >
            {colorMode === "light" ? (
              <SunIcon color="black" />
            ) : (
              <MoonIcon color="white" />
            )}
          </MotionButton>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
};
