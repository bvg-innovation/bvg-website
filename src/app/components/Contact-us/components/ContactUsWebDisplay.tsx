import {
  Flex,
  Box,
  HStack,
  Center,
  VStack,
  Button,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { Formik, Form } from "formik";
import { MailIcon, TelIcon } from "../../../../../public/assets/svg";
import { ContactCard } from "../ContactUs";
import { contactValues } from " _/app/components/Contact-us/types/contact-values";
import { contactValidationSchema } from " _/app/components/Contact-us/validation/contact-validation";
import { TextInput } from " _/app/components/Input/TextInput";
import axios from "axios";

export const ContactUsWebDisplay = () => {
  const toast = useToast();

  const handleSubmit = async (values: any, actions: any) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/send-email`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (res.data.success) {
        toast({
          title: "Message sent successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        actions.resetForm();
      } else {
        toast({
          title: "Failed to send message.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Failed to send message.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error("Error sending email:", error);
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <Flex flexDirection="column" alignItems="center">
      <HStack spacing={20} align={"center"} justify={"center"}>
        <ContactCard
          icon={<MailIcon width={"24px"} height={"24px"} fill={"white"} />}
          title="Mail Us"
          info="contact@bvg-innovation.tech"
        />
        <ContactCard
          icon={<TelIcon width={"24px"} height={"24px"} fill={"white"} />}
          title="Call Us"
          info="+216 51 719 140"
        />
      </HStack>

      <Center>
        <Box
          mt={"40px"}
          bgColor={"white"}
          borderRadius={"40px"}
          boxShadow={"lg"}
          width={{ md: "80vw", lg: "80vw", "2xl": "55vw" }}
        >
          <Formik
            enableReinitialize
            initialValues={contactValues}
            validationSchema={contactValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form>
                <VStack justify={"center"} spacing={10} p={"50px"}>
                  <HStack spacing={5} width={"100%"}>
                    <TextInput
                      name="userInfo"
                      label="Nom & Prenom"
                      placeholder="Enter your name"
                      required
                      onChangefunc={(e: { target: { value: any } }) =>
                        setFieldValue("userInfo", e.target.value)
                      }
                    />
                    <TextInput
                      name="email"
                      label="Votre Email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      onChangefunc={(e: { target: { value: any } }) =>
                        setFieldValue("email", e.target.value)
                      }
                    />
                  </HStack>
                  <TextInput
                    name="objectMessage"
                    label="Object"
                    placeholder="Enter the title"
                    required
                    maxLength={100}
                    onChangefunc={(e: { target: { value: any } }) =>
                      setFieldValue("objectMessage", e.target.value)
                    }
                  />
                  <TextInput
                    name="message"
                    label="Message"
                    as="textarea"
                    placeholder="Enter your message"
                    height={"150px"}
                    required
                    maxLength={500}
                    onChangefunc={(e: { target: { value: string } }) =>
                      setFieldValue("message", e.target.value)
                    }
                  />
                  <Center>
                    <Button
                      size="lg"
                      w="206px"
                      borderRadius={"12px"}
                      color={"white"}
                      type="submit"
                      isLoading={isSubmitting}
                    >
                      Envoyer le message
                    </Button>
                  </Center>
                </VStack>
              </Form>
            )}
          </Formik>
        </Box>
      </Center>
    </Flex>
  );
};
