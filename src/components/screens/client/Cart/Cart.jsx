import React, { useState } from "react";
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
import MockData from "./mock_data.json";

const Cart = () => {
  const navigate = useNavigate();
  const buttonSize = useBreakpointValue(["sm", "md"]);
  const [cartItem, setCartItem] = useState(MockData);


  const removeItem = (data) => {
    

  }
  return (
    <Box>
      <Container>
        {
          cartItem.map((element,index) => {
            
            return <CartItem key={index} data={element} removeItem={removeItem} />
          })
        }
      </Container>
      <Box width={"full"} bg={'primary'} padding={'1'} position={"sticky"} bottom={"0"}>
      
        {cartItem && <Button width={"full"} bg={"brand.900"}>
          Place Order
        </Button>}
      </Box>
    </Box>
  );
};

export default Cart;
