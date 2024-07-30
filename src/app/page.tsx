"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Spinner,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import HowItWork from "./components/HowItWork/HowItWork";
import ServicesSection from "./components/OurServices/OurServices";
import { PlatformOverview } from "./components/PlatformOverview/PlatformOverview";
import { TeamWork } from "./components/TeamWork/TeamWork";
import { BVGHistory } from "./components/BVGHistory/BVGHistory";
import ContactUs from "./components/Contact-us/ContactUs";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/HeroHeader/components/NavBar";
import { Header } from "./components/HeroHeader/Header";
import { WebNavBar } from "./components/HeroHeader/components/WebNavBar";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScroll, setShowScroll] = useState(false);
  const responsiveMode = useBreakpointValue({
    base: "mobile",
    sm: "tablet",
    md: "web",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <Flex align="center" justify="center" height="100vh" bgColor="white">
        <Spinner size="xl" />
      </Flex>
    );
  }

  return (
    <Box>
      <Box>{responsiveMode === "web" ? <WebNavBar /> : <NavBar />}</Box>
      <Header />
      <HowItWork />
      <ServicesSection />
      <PlatformOverview />
      <TeamWork />
      <BVGHistory />
      <Box mt={"50px"} mb={"50px"}>
        <ContactUs />
      </Box>
      <Footer />

      {showScroll && (
        <IconButton
          icon={<ArrowUpIcon width={"30px"} height={"30px"} />}
          position="fixed"
          bottom="100px"
          right="25px"
          zIndex="1000"
          onClick={scrollTop}
          aria-label="Scroll to top"
          bgColor="primary.500"
          color="white"
          _hover={{ bgColor: "primary.600" }}
          width={"60px"}
          height={"60px"}
          borderRadius={"50px"}
          boxShadow={"lg"}
        />
      )}
    </Box>
  );
}
