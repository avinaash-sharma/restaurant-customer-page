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
import { RiDeleteBin6Line, RiAddCircleLine } from "react-icons/ri";
import { HiOutlineMinusCircle } from "react-icons/hi";
import Counter from "../Counter";

const CartItem = () => {
  return (
    <Card margin={2} padding={4} w="full" bg={"brand.900"}>
      <Flex justifyContent={"flex-start"}>
        <Box marginRight={3}>
          <Image
            borderRadius={"full"}
            objectFit={'cover'}
            boxSize={['50px', '100px', '150px']}
            src="https://images.pexels.com/photos/2689419/pexels-photo-2689419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="spinach"
          />
        </Box>
        <Box width={'full'}>
          <Flex flexDirection={"column"} justifyContent={'flex-end'}>
            <Box>
              <Text as="b">Some Kind of Food</Text>
              <Text  pt="1" fontSize="xs">
              ₹ 1000
              </Text>
            </Box>
            <Flex width={'full'} pt={3} justifyContent={"space-between"}>
              <Box>
                <Flex>
                  <Icon as={HiOutlineMinusCircle} color={"primary"} size={"20"} />
                  <Text width={5} defaultValue={10} color={'primary'} />
                  <Icon as={RiAddCircleLine} color={"primary"} size={"20"} />
                </Flex>
              </Box>
              <Box>
                <Icon as={RiDeleteBin6Line} color={"primary"} size={"20"} />
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};

export default CartItem;
