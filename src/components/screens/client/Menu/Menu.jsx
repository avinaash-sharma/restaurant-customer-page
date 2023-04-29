import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdRemoveCircleOutline } from "react-icons/md";
import MockData from "./mock_data.json";
import FoodCard from "../../../commonComponents/FoodCards";

const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // const menu = [...MockData.menu];
  const getData = () => {
    const characterOfFood = [];
    MockData.forEach((category) => {
      characterOfFood.push(category.category);
    });

    const uniqueCategory = characterOfFood.filter(
      (category, index) => characterOfFood.indexOf(category) == index
    );

    setCategories(uniqueCategory);
    
    // console.log("🚀 ~ file: Menu.jsx:14 ~ getData ~ MockData[0]:", MockData[0]);
    // console.log(
    //   "🚀 ~ file: Menu.jsx:14 ~ getData ~ characterOfFood:",
    //   characterOfFood
    // );
    // for (const key in MockData[0]) {
    //   console.log("🚀 ~ file: Menu.jsx:16 ~ getData ~ key:", MockData[0][key]);
    // }
    // MockData.forEach(element => {
    //     console.log("🚀 ~ file: Menu.jsx:15 ~ getData ~ element:", element)
    //     element.map(item => {
    //         if(!characterOfFood.includes(item)){
    //             characterOfFood.push(item);
    //         }
    //     })
    // })
    // console.log("🚀 ~ file: Menu.jsx:11 ~ Menu ~ characterOfFood:", characterOfFood)
  };

  const handleClickMenu = (categoryName) => {
    var operationVariable = [...selectedCategories];
    if (!operationVariable.includes(categoryName)) {
      operationVariable.push(categoryName);
    } else {
      operationVariable = operationVariable.filter(
        (item) => item !== categoryName
      );
    }
    setSelectedCategories(operationVariable);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      <div className="menuContainer">
        {categories?.map((category, index) => {
          return (
            <Button
                backgroundColor={'brand.900'}
                onClick={() => handleClickMenu(category)}
                key={category + index + "_box"}
                size={"sm"}
                leftIcon={selectedCategories.includes(category) && <MdRemoveCircleOutline />}
              >
                {category}
              </Button>
            // <Tag
            //   size={"sm"}
            //   key={category + index + "_box"}
            //   borderRadius="full"
            //   variant={"brand.900"}
            //   colorScheme={"brand.900"}
            // >
            //   <TagLabel>{category}</TagLabel>
            //   {selectedCategories.includes(category) && (
            //     <MdRemoveCircleOutline />
            //   )}
            // </Tag>
          );
        })}
      </div>
      <div className="foodCardContainer">
        {MockData.map((item, index) => {
          if (selectedCategories.length == 0) {
            return <FoodCard key={index + item} data={item} />;
          } else {
            if (selectedCategories.includes(item.category)) {
              return <FoodCard key={index + item} data={item} />;
            }
          }
        })}
      </div>
    </Box>
  );
};

export default Menu;
