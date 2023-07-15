import React, {useEffect, useState, useRef} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }

  if (!values.comment) {
    errors.comment = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  }

  return errors;
};

const LandingSection = () => {
const values = '';
  const {isLoading, response, submit} = useSubmit(values);
  const { onOpen } = useAlertContext();
  

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    validate,
    onSubmit: ( values , { resetForm } ) => {
      submit(values);
      console.log("is loading: " + isLoading);
      if (response) {
        const success = Object.values(response)[0] === 'success';
        const firstName = Object.values(values)[0];
        if (response && success) {
          onOpen('success','Thanks for your submission ' + firstName + ', we will get back to you shortly!');
          resetForm();
        }else{
          onOpen('error','Something went wrong, please try again later!');
        }
      }else{
        onOpen('error','Something went wrong, please try again later!');
      }
    },
    validationSchema: Yup.object({
      firstName: Yup.string('Enter your Name').required('Required'),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string('Enter your Type'),
      comment: Yup.string('Enter your comment'),
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps('firstName')}
                />
                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select 
                id="type" 
                name="type" 
                {...formik.getFieldProps('type')}
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps('comment')}
                />
                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>
              { isLoading ?
              ( <Button type="submit" colorScheme="purple" width="full" isLoading>
                Submit
              </Button>) : (
                <Button type="submit" colorScheme="purple" width="full">
                Submit
              </Button> )}
              
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
