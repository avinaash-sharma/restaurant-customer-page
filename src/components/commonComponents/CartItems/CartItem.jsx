import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Square,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { SiFoodpanda } from "react-icons/si";
import Counter from "../Counter";

const CartItem = () => {
  return (
    <Card bgColor={"brand.900"}>
      <CardBody>
        <Flex justifyContent={"flex-start"}>
          <Image
            borderRadius="full"
            objectFit={"cover"}
            boxSize="80px"
            src="https://images.pexels.com/photos/13241736/pexels-photo-13241736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Dan Abramov"
          />
          <Box ml={4}>
            <Heading size="md">{"Caprese Salad"}</Heading>
            <HStack>
              <Text as="b" color="white" fontSize="md">
                ₹ {300.01}
              </Text>
              <Counter />
            </HStack>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default CartItem;
