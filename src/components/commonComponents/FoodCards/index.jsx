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
} from "@chakra-ui/react";

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
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={item.image}
        alt={item.name}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{item.name}</Heading>

          <Text py="2">{item.description}</Text>
          <HStack spacing={2}>
          {item.characteristics.map((character) => {
            return (
              
              <Tag
                size={"md"}
                key={item.id + character}
                variant="subtle"
                colorScheme="cyan"
              >
                <TagLabel>{character}</TagLabel>
              </Tag>
            );
          })}
          </HStack>
        </CardBody>

        <CardFooter>
          <Button variant="primary" colorScheme="blue">
            Add to Tray
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default index;