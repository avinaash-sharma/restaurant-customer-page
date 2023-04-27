import React from "react";
import CartItem from "../../../commonComponents/CartItems";
import "../../../../styles/components/Cart.css";
import {
  Box,
  Button,
  Card,
  Center,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const buttonSize = useBreakpointValue(["sm", "md"]);
  return (
    <div>
      <Box paddingX={5}>
        <CartItem />
      </Box>
      <Box bottom={0} position={'fixed'} marginTop={4}>
        <Center>
          <Button
            variant="primary"
            onClick={() => navigate()}
            size={buttonSize}
            w={[300, 200, 60]}
          >
            Place Order
          </Button>
        </Center>
      </Box>
    </div>
  );
};

export default Cart;
