import { Box, Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { MdUnarchive } from 'react-icons/md';
import MockData from "./_data.js";

const Menu = () => {
    
    const characterOfFood = [];
    
    // const menu = [...MockData.menu];
    const getData = () => {
        // MockData.forEach(element => {
        //     console.log("🚀 ~ file: Menu.jsx:15 ~ getData ~ element:", element)
        //     element.map(item => {
        //         if(!characterOfFood.includes(item)){
        //             characterOfFood.push(item);
        //         }
        //     })
        // })
        // console.log("🚀 ~ file: Menu.jsx:11 ~ Menu ~ characterOfFood:", characterOfFood)
        
    }
    useEffect(() => {
      getData();
    }, [])
    
  return (
    <Box>
        <div className="menuContainer">
            <div></div>
        </div>
    </Box>
  )
}

export default Menu