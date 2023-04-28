import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdUnarchive } from "react-icons/md";
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
    console.log(
      "🚀 ~ file: Menu.jsx:20 ~ getData ~ characterOfFood:",
      uniqueCategory
    );
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
    if(!operationVariable.includes(categoryName)){
      operationVariable.push(categoryName);
    }else{
      operationVariable = operationVariable.filter(item => item !== categoryName);
    }
    setSelectedCategories(operationVariable);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      <div className="menuContainer">
        {categories?.map((category, index) => {
          return (
            <ButtonGroup key={category + index + "_button_group"} onClick={() => handleClickMenu(category)} size="sm" isAttached variant="primary">
              <Button
                variant={"primary"}
                key={category + index + "_box"}
                size={"sm"}
              >
                {category}
              </Button>
              {selectedCategories.includes(category) && <IconButton key={category + index + "_icon"} aria-label="Add to friends" icon={<MdUnarchive />} />}
            </ButtonGroup>
          );
        })}
      </div>
      <div className="foodCardContainer">
        {MockData.map((item, count) => (
          <FoodCard key={count + item.name} data={item} />
        ))}
      </div>
    </Box>
  );
};

export default Menu;
