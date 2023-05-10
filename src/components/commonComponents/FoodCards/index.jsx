import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Tag,
  TagLabel,
  TagLeftIcon,
  HStack,
  Flex,
} from "@chakra-ui/react";

import Counter from "../Counter";
import "../../../styles/components/Card.css";

import React from "react";

const index = ({ data }) => {
  // console.log("🚀 ~ file: index.jsx:4 ~ index ~ data:", data);

  const item = data;
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="primary"
      backgroundColor={"brand.900"}
      my={{ base: "10", md: "15" }}
      p={{ base: "1", md: "10" }}
    >
    <Flex>
      <Image
        objectFit="cover"
        maxW={{ base: "100px", sm: "50px" }}
        h={{base: "100px", sm: "50px" }}
        src={item.image}
        alt={item.name}
      />

      <Stack paddingLeft={3}>
          <Heading size="sm">{item.name}</Heading>

          {/*<Text py="2">{item.description}</Text>*/}
          <HStack spacing={2}>
            {item?.characteristics.map((character) => {
              return (
                <Tag
                  size={"sm"}
                  key={item.id + character}
                  variant="subtle"
                  colorScheme="cyan"
                >
                  <TagLabel>{character}</TagLabel>
                </Tag>
              );
            })}
          </HStack>

        
          <div className="cardFooter">
            
            <Counter />

            <Text as='b' pt={"2"} color="white" fontSize="lg">
              ₹ {item.price}
            </Text>
          </div>
          {/*<Button variant="primary" colorScheme="blue">
            Add to Tray
        </Button>*/}
        
      </Stack>
      </Flex>
    </Card>
  );
};

export default index;
