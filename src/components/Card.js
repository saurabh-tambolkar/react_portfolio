import { Heading, HStack, Image, Text, VStack, Flex, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";


const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  const projectItems = 
  <VStack backgroundColor='white' rounded="2xl">
    <Image src={imageSrc} alt={title} rounded="2xl"/>
    <Flex>
      <Box color='black' p={15} backgroundColor='white' roundedBottom="2xl">
        <Heading mx="auto" size='sm'>{title}</Heading>
        <Text fontSize='sm' pt={3}>{description}</Text>
        <HStack pt={3}>
          <Text fontSize='sm' >See More</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </Box>
    </Flex>

  </VStack>;

  return projectItems;
};

export default Card;
