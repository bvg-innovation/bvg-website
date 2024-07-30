import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  VStack,
  Image,
  OrderedList,
  ListItem,
  Stack,
  UnorderedList,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { WorkIcon } from "../../../../public/assets/svg";

export const TeamWork = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} p={4}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Flex
            bgColor={"#FFF3E1"}
            width={"155px"}
            height={"50px"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"20px"}
          >
            <Text
              fontSize={{ base: "18px", md: "22px" }}
              color={"secondary.500"}
            >
              Blog
            </Text>
          </Flex>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Text fontSize={{ base: "18px", md: "32px" }}>
            The perfect <span style={{ fontWeight: "bold" }}>Creativity</span>
          </Text>
        </motion.div>
      </VStack>
      <Center p={3}>
        <Box flexDirection={"column"}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              alt="test"
              src={"/assets/images/teamWork.png"}
              borderRadius={{ base: "20px", md: "50px" }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Center mt={20}>
              <VStack spacing={5} align={"start"}>
                <Text fontWeight={"bold"} fontSize={"28px"}>
                  The Perfect Creativity
                </Text>
                <VStack spacing={10} align={"flex-start"}>
                  <Stack width={{ base: "100%", md: "700px" }} spacing={5}>
                    <Text
                      fontSize={{ base: "16px", sm: "18px", md: "20px" }}
                      textAlign={{ base: "justify", md: "left" }}
                    >
                      Veniam quae. Nostrum facere repellendus minus quod aut
                      aliquam neque reiciendis. Qui beatae vel magnam
                      repudiandae ipsum repellat repudiandae. Voluptate at
                      dolores ut dolor sint occaecati similique. Velit eius ab
                      delectus temporibus.
                    </Text>
                    <Text
                      fontSize={{ base: "16px", sm: "18px", md: "20px" }}
                      textAlign={{ base: "justify", md: "left" }}
                    >
                      For dynamic content, add a rich text field to any
                      collection and then connect a rich text element to that
                      field in the settings panel. Headings, paragraphs,
                      block-quotes, figures, images, and figure captions can all
                      be styled.
                    </Text>
                    <OrderedList spacing={4}>
                      <ListItem
                        fontSize={{ base: "16px", sm: "18px", md: "20px" }}
                      >
                        Neque sodales ut etiam sit amet nisl purus non tellus
                        orci ac auctor.
                      </ListItem>
                      <ListItem
                        fontSize={{ base: "16px", sm: "18px", md: "20px" }}
                      >
                        Nostrum facere repellendus minus quod aut aliquam neque
                        reiciendis.
                      </ListItem>
                      <ListItem
                        fontSize={{ base: "16px", sm: "18px", md: "20px" }}
                      >
                        A rich text element can be used with static or dynamic
                        content.
                      </ListItem>
                      <ListItem
                        fontSize={{ base: "16px", sm: "15px", md: "20px" }}
                      >
                        Facere repellendus minus quod aut aliquam neque
                        reiciendis.
                      </ListItem>
                    </OrderedList>
                  </Stack>
                  <Stack width={{ base: "100%", md: "700px" }} spacing={5}>
                    <Text fontWeight={"bold"} fontSize={"28px"}>
                      Business Analysis
                    </Text>
                    <Text
                      fontSize={{ base: "16px", sm: "15px", md: "20px" }}
                      textAlign={{ base: "justify", md: "left" }}
                    >
                      Veniam quae. Nostrum facere repellendus minus quod aut
                      aliquam neque reiciendis. Qui beatae vel magnam
                      repudiandae ipsum repellat repudiandae. Voluptate at
                      dolores ut dolor sint occaecati similique. Velit eius ab
                      delectus temporibus.
                    </Text>
                  </Stack>
                  <Stack width={{ base: "100%", md: "700px" }} spacing={5}>
                    <Text fontWeight={"bold"} fontSize={"28px"}>
                      Take Care of Clients
                    </Text>
                    <Text
                      fontSize={{ base: "16px", sm: "18px", md: "20px" }}
                      textAlign={{ base: "justify", md: "left" }}
                    >
                      Veniam quae. Nostrum facere repellendus minus quod aut
                      aliquam neque reiciendis. Qui beatae vel magnam
                      repudiandae ipsum repellat repudiandae. Voluptate at
                      dolores ut dolor sint occaecati similique. Velit eius ab
                      delectus temporibus.
                    </Text>
                    <UnorderedList
                      spacing={4}
                      fontSize={{ base: "16px", sm: "15px", md: "20px" }}
                    >
                      <ListItem>
                        Neque sodales ut etiam sit amet nisl purus non tellus
                        orci ac auctor.
                      </ListItem>
                      <ListItem>
                        Nostrum facere repellendus minus quod aut aliquam neque
                        reiciendis.
                      </ListItem>
                      <ListItem>
                        A rich text element can be used with static or dynamic
                        content.
                      </ListItem>
                      <ListItem>
                        Facere repellendus minus quod aut aliquam neque
                        reiciendis.
                      </ListItem>
                    </UnorderedList>
                    <Text
                      fontSize={{ base: "16px", sm: "18px", md: "20px" }}
                      textAlign={{ base: "justify", md: "left" }}
                    >
                      Veniam quae. Nostrum facere repellendus minus quod aut
                      aliquam neque reiciendis. Qui beatae vel magnam
                      repudiandae ipsum repellat repudiandae. Voluptate at
                      dolores ut dolor sint occaecati similique. Velit eius ab
                      delectus temporibus.
                    </Text>
                  </Stack>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <Flex
                      bgColor={"primary.500"}
                      borderRadius={"12px"}
                      align={"center"}
                      justify={"center"}
                    >
                      <VStack
                        spacing={5}
                        width={{ base: "100%", md: "700px" }}
                        align={"center"}
                        p={8}
                      >
                        <WorkIcon width={20} h={20} />
                        <Text
                          fontSize={{ base: "16px", sm: "18px", md: "20px" }}
                          color={"white"}
                          textAlign={"center"}
                        >
                          Veniam quae. Nostrum facere repellendus minus quod aut
                          aliquam neque reiciendis. Qui beatae vel magnam
                          repudiandae ipsum repellat repudiandae. Voluptate at
                          dolores
                        </Text>
                      </VStack>
                    </Flex>
                  </motion.div>
                  <Stack width={{ base: "100%", md: "700px" }} spacing={5}>
                    <Text fontWeight={"bold"} fontSize={"28px"}>
                      Strategy and Planning
                    </Text>
                    <Text
                      fontSize={{ base: "16px", sm: "18px", md: "20px" }}
                      textAlign={{ base: "justify", md: "left" }}
                    >
                      Veniam quae. Nostrum facere repellendus minus quod aut
                      aliquam neque reiciendis. Qui beatae vel magnam
                      repudiandae ipsum repellat repudiandae. Voluptate at
                      dolores ut dolor sint occaecati similique. Velit eius ab
                      delectus temporibus.
                    </Text>
                  </Stack>
                </VStack>
              </VStack>
            </Center>
          </motion.div>
        </Box>
      </Center>
    </Box>
  );
};
