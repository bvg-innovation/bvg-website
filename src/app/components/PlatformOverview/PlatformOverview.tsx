import {
  Box,
  Flex,
  Text,
  VStack,
  SimpleGrid,
  useBreakpointValue,
  GridItem,
  Grid,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { FirstCardItem } from "./components/FirstCardItem";
import { platformOverview, platformOverview2 } from "./dummyPlatform";
import { CardItem } from "./components/SecondCardItem";

export const PlatformOverview = () => {
  const responsive = useBreakpointValue({ base: "mobile", md: "web" });
  return (
    <Box mt={"50px"} p={4}>
      <Center>
        <Flex
          p={3}
          alignItems={"center"}
          justifyContent={{
            base: "none",
            md: "space-between",
          }}
          flexDirection={{ base: "column", sm: "column", md: "row" }}
          width={{ base: "auto", md: "85%", "2xl": "70%" }}
        >
          <VStack
            align={{ base: "center", sm: "center", md: "start" }}
            justifyContent={"center"}
            width={{ base: "100%", md: "260px" }}
            spacing={4}
          >
            <Flex
              bgColor={"#FFF3E1"}
              width={"155px"}
              height={"50px"}
              alignItems={"center"}
              justifyContent={"center"}
              borderRadius={"20px"}
            >
              <Text fontSize={{ md: "18px" }} color={"secondary.500"}>
                Platform
              </Text>
            </Flex>
            <Text
              textAlign={{ base: "center", sm: "center", md: "left" }}
              fontSize={{ base: "18px", md: "22px" }}
            >
              Get an overview of the{" "}
              <span style={{ fontWeight: "bold" }}>BVG-INNOVATION </span> Tools
            </Text>
          </VStack>
          <Flex
            width={{ base: "100%", md: "400px" }}
            align={"center"}
            justify={"center"}
          >
            <Text
              textAlign={{ base: "center", sm: "center", md: "right" }}
              fontSize={"18px"}
            >
              Provide the best, most intuitive support across all channels.
              Proactively understand customer needs to serve excellence the
              first time.
            </Text>
          </Flex>
        </Flex>
      </Center>

      {responsive === "mobile" ? (
        <>
          <Flex
            alignItems="center"
            justifyContent="center"
            direction={{ base: "column", lg: "row" }}
            p={4}
          >
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <GridItem>
                {platformOverview.slice(0, 1).map((platformData, index) => (
                  <CardItem
                    key={index}
                    icon={platformData.icon}
                    image={platformData.image}
                    title={platformData.title}
                    description={platformData.description}
                  />
                ))}
              </GridItem>

              <GridItem>
                {platformOverview.slice(1, 2).map((platformData, index) => (
                  <FirstCardItem
                    key={index}
                    icon={platformData.icon}
                    title={platformData.title}
                    description={platformData.description}
                  />
                ))}
              </GridItem>
            </Grid>
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            direction={{ base: "column", lg: "row" }}
            p={4}
          >
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <GridItem>
                {platformOverview2.slice(0, 1).map((platformData, index) => (
                  <FirstCardItem
                    key={index}
                    icon={platformData.icon}
                    title={platformData.title}
                    description={platformData.description}
                  />
                ))}
              </GridItem>

              <GridItem>
                {platformOverview2.slice(1, 2).map((platformData, index) => (
                  <CardItem
                    key={index}
                    icon={platformData.icon}
                    image={platformData.image}
                    title={platformData.title}
                    description={platformData.description}
                  />
                ))}
              </GridItem>
            </Grid>
          </Flex>
        </>
      ) : (
        <Center>
          <VStack
            spacing={10}
            p={5}
            align={"center"}
            justify={"space-around"}
            width={{ base: "auto", md: "80%", xl: "90%" }}
          >
            <Flex alignItems={"start"} justifyContent={"space-around"} gap={10}>
              <SimpleGrid>
                {platformOverview
                  .slice(0, 1)
                  ?.map((platformData, index) => (
                    <CardItem
                      key={index}
                      icon={platformData.icon}
                      image={platformData.image}
                      title={platformData.title}
                      description={platformData.description}
                    />
                  ))}
              </SimpleGrid>

              <SimpleGrid>
                {platformOverview
                  .slice(1, 2)
                  ?.map((platformData, index) => (
                    <FirstCardItem
                      key={index}
                      icon={platformData.icon}
                      title={platformData.title}
                      description={platformData.description}
                    />
                  ))}
              </SimpleGrid>
            </Flex>
            <Flex alignItems={"start"} justifyContent={"space-around"} gap={10}>
              <SimpleGrid>
                {platformOverview2
                  .slice(0, 1)
                  ?.map((platformData, index) => (
                    <FirstCardItem
                      key={index}
                      icon={platformData.icon}
                      title={platformData.title}
                      description={platformData.description}
                    />
                  ))}
              </SimpleGrid>

              <SimpleGrid>
                {platformOverview2
                  .slice(1, 2)
                  ?.map((platformData, index) => (
                    <CardItem
                      key={index}
                      icon={platformData.icon}
                      image={platformData.image}
                      title={platformData.title}
                      description={platformData.description}
                    />
                  ))}
              </SimpleGrid>
            </Flex>
          </VStack>
        </Center>
      )}
    </Box>
  );
};
