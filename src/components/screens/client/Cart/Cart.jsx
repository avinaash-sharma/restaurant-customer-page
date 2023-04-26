import React from "react";
import CartItem from "../../../commonComponents/CartItems";
import "../../../../styles/components/Cart.css";
import { Box } from "@chakra-ui/react";
const Cart = () => {
  return (
    <Box>
      <div className="menuContainer">
        <CartItem />
      </div>
    </Box>
  );
};

export default Cart;
