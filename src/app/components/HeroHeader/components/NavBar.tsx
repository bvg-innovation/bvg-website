import { CloseIcon, HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Text,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Stack,
  useDisclosure,
  IconButton,
  useColorMode,
  Switch,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Links } from "../dummyLinks";
import Image from "next/image";

export const NavBar = () => {
  const MotionText = motion(Text);
  const MotionImage = motion(Image);
  const MotionBox = motion(Box);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <Box
      position="fixed"
      width="100%"
      zIndex="10000"
      transition="background-color 0.3s"
      bg={isScrolled ? "primary.500" : "none"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Flex align={"center"} justifyContent={"space-between"} p={4}>
        <Flex align={"center"} gap={2}>
          <MotionBox
            width={"30px"}
            height={"30px"}
            borderRadius="9px"
            bgColor="#F5F5F5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <MotionImage
              alt="hero-image"
              width={30}
              height={30}
              src="/assets/logo/losange-icon.png"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </MotionBox>
          <MotionText
            fontSize={"20px"}
            fontWeight="bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            color={colorMode === "light" && !isScrolled ? "black" : "white"}
          >
            BVG - INNOVATION
          </MotionText>
        </Flex>

        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={isOpen ? onClose : onOpen}
          bgColor={colorMode === "light" ? "#F9F9F9" : "secondary.500"}
          boxShadow={"lg"}
          aria-label="Open Menu"
        />

        <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent bgColor={"white"} flex={1}>
              <DrawerBody
                display={"flex"}
                alignItems={"flex-start"}
                justifyContent={"flex-start"}
                bgColor={"white"}
                mt={"100px"}
              >
                <Stack spacing={4} width={"100%"}>
                  {Links?.map((link, index) => (
                    <Button
                      key={index}
                      alignItems={"center"}
                      justifyContent={"flex-start"}
                      color={"black"}
                      onClick={onClose}
                      bgColor={"white"}
                      _hover={{
                        backgroundColor: "secondary.500",
                        color: "white",
                      }}
                    >
                      {link.title}
                    </Button>
                  ))}
                  <Flex direction="row" gap={2} width={"100%"}>
                    <Button
                      width={"50%"}
                      bgColor="primary.500"
                      onClick={onClose}
                      color={"white"}
                    >
                      Contact-us
                    </Button>
                    <Button
                      bgColor={"secondary.500"}
                      width={"50%"}
                      color={"white"}
                      onClick={onClose}
                    >
                      Book a schedule
                    </Button>
                  </Flex>
                  <Flex mt={"40px"} gap={5} alignItems="center">
                    <SunIcon
                      color={colorMode === "light" ? "primary.500" : "black"}
                    />
                    <Switch
                      colorScheme={colorMode === "light" ? "none" : "secondary"}
                      onChange={toggleColorMode}
                      isChecked={colorMode === "dark"}
                      display="flex"
                    />
                    <MoonIcon
                      color={colorMode === "light" ? "black" : "secondary.500"}
                    />
                  </Flex>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>
    </Box>
  );
};
