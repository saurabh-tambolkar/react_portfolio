import React from "react";
import { Avatar, Heading, VStack, Center } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack w="1024px" p={32} alignItems="flex-center" justifyContent="flex-center">
      
        <Avatar mx="auto" size='2xl' name='Pete The Man' src='https://i.pravatar.cc/150?img=7' />
        <Center>
        <Heading mx="auto" size='md'>{greeting}</Heading>
        </Center>
        <Center>
        <Heading mt={30} mx="auto" size='4xl'>{bio1}</Heading>
        </Center>
        <Center>
        <Heading mx="auto" size='4xl'>{bio2}</Heading>
        </Center>

      
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
