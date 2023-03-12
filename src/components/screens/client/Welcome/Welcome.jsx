import {
  Text,
  Heading,
  Button,
  Stack,
  AbsoluteCenter,
  Center,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { SiFoodpanda } from "react-icons/si";
import { MdFastfood } from "react-icons/md";
import { useParams } from "react-router";
import SocialLinks from "../../../commonComponents/socialLink/index.jsx";

const Welcome = () => {
  const params = useParams();
  const buttonSize = useBreakpointValue(["sm", "md"]);
  console.log("🚀 ~ file: Welcome.jsx:10 ~ Welcome ~ params:", params);

  return (
    <div>
      <AbsoluteCenter className="welcomeBody">
        <Center padding={{ base: 2, md: 4 }}>
          {params.name === "FoodPanda" ? (
            <SiFoodpanda color="#B0883C" size="40" />
          ) : params.name === "FastFood" ? (
            <MdFastfood color="white" size="40" />
          ) : null}
        </Center>
        <Stack spacing={{ base: "6", md: "8" }}>
          <Center>
            <Text color="primaryText">{params.name}</Text>
          </Center>
          <Stack spacing={{ base: "4", md: "5" }} align="center">
            <Heading size={{ base: "sm", md: "md" }} color="secondaryText">
              Food for you
            </Heading>
            <Text
              as="b"
              color="primaryText"
              maxW="2xl"
              textAlign="center"
              fontSize="3xl"
            >
              Lets eat yummy food.
            </Text>
          </Stack>
          <Stack
            spacing="3"
            direction={{ base: "column", sm: "row" }}
            justify="center"
          >
            <Button variant="primary" size={buttonSize} w={[300, 200, 60]}>
              About Us
            </Button>
            <Button variant="primary" size={buttonSize} w={[300, 200, 60]}>
              Menu
            </Button>
          </Stack>
        </Stack>
        <SocialLinks />
      </AbsoluteCenter>
      
    </div>
  );
};

export default Welcome;
