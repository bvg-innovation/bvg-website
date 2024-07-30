"use client";

import { Box, Button, HStack, Text, Flex } from "@chakra-ui/react";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IdeaIcon } from "../../../../public/assets/svg";
import Image from "next/image";

const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionText = motion(Text);
const MotionImage = motion(Image);

const HowItWork = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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
    <MotionBox
      alignItems={"center"}
      justifyContent={"center"}
      overflow={"hidden"}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={boxVariants}
      //mt={"50px"}
      mb={"50px"}
      p={4}
    >
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        direction={"column"}
      >
        <Flex
          color={"primary.500"}
          bgColor={"#EFECFF"}
          w={"195px"}
          h={"60px"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"20px"}
        >
          <Text fontSize={"18px"}>Comment ça marche</Text>
        </Flex>
        <Box
          mt={"20px"}
          alignItems={"center"}
          justifyContent={"center"}
          maxW={{ base: "100%", sm: "65%", lg: "50%", md: "100%" }}
        >
          <MotionText
            fontWeight={"bold"}
            fontSize={{ base: "18px", md: "30px" }}
            textAlign={"center"}
            variants={boxVariants}
          >
            Travaillez plus intelligemment avec un accès facile pour a toutes
            vos données.
          </MotionText>
        </Box>
      </Flex>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        direction={"column"}
        mt={"20px"}
      >
        <Box
          alignItems={"center"}
          justifyContent={"center"}
          maxW={{ base: "100%", sm: "65%", lg: "50%", md: "100%" }}
          p={3}
        >
          <HStack spacing={8} flexDirection={{ base: "column", md: "row" }}>
            <MotionBox width={{ base: "100%", md: "700px" }}>
              <HStack spacing={5}>
                <Flex
                  bgColor={"primary.500"}
                  width={{ base: "40px", md: "50px" }}
                  height={{ base: "40px", md: "50px" }}
                  borderRadius={"12px"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <IdeaIcon
                    width={{ base: "20px", md: "30px" }}
                    height={{ base: "20px", md: "30px" }}
                    fill={"secondary.500"}
                  />
                </Flex>
                <Box>
                  <MotionText
                    fontWeight={"bold"}
                    fontSize={{ base: "18px", md: "22px" }}
                    variants={boxVariants}
                  >
                    Nous rendons vos idées réelles
                  </MotionText>
                </Box>
              </HStack>
              <MotionBox mt={"15px"} variants={boxVariants}>
                <Text fontSize={"16px"} textAlign={"justify"}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                  impedit, labore consectetur, magnam corrupti ipsam aliquid
                  nulla omnis vitae eos officia accusantium aperiam illum? Ut
                  dolore est modi perspiciatis nam.
                </Text>
              </MotionBox>
              <MotionButton
                mt={"20px"}
                color={"white"}
                borderRadius={"7px"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={boxVariants}
              >
                Commencer
              </MotionButton>
            </MotionBox>
            <MotionBox variants={boxVariants}>
              <Image
                width={500}
                height={500}
                alt="user-think"
                src="/assets/images/user-think.png"
              />
            </MotionBox>
          </HStack>
        </Box>
      </Flex>
    </MotionBox>
  );
};

export default HowItWork;
