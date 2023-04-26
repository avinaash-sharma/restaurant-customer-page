import {
  Box,
  Button,
  Container,
  HStack,
  Icon,
  Square,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { SiFoodpanda } from "react-icons/si";

const CartItem = () => {
  return (
    <Box>
      <HStack spacing="3">
        <Square size="10" bg="bg-subtle" borderRadius="lg">
          <Icon as={SiFoodpanda} boxSize="5" />
        </Square>
        <Box fontSize="sm">
          <Text color={"brand.900"} fontWeight="medium">
            Invoice_03/2022.pdf
          </Text>
          <Text color={"brand.900"}>1.2MB</Text>
        </Box>
      </HStack>
      <Stack
        spacing="3"
        direction={{
          base: "column-reverse",
          md: "row",
        }}
      >
        <Button size={"xs"} variant="primary">
          Order
        </Button>
      </Stack>
    </Box>
  );
};

export default CartItem;
