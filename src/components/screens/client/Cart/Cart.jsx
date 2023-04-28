import React from "react";
import CartItem from "../../../commonComponents/CartItems";
import "../../../../styles/components/Cart.css";
import {
  Box,
  Button,
  Card,
  Center,
  Container,
  Flex,
  Icon,
  Image,
  Portal,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const buttonSize = useBreakpointValue(["sm", "md"]);
  return (
    <Box>
      <Container>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </Container>
      <Box width={"full"} bg={'primary'} padding={'1'} position={"sticky"} bottom={"0"}>
      
        <Button width={"full"} bg={"brand.900"}>
          Place Order
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
