import { Button, HStack, IconButton, Input, useNumberInput } from "@chakra-ui/react";
import React from "react";
import { MdOutlineAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/md';

const index = () => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 0,
      min: 0,
      max: 20,
      precision: 0,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();
  return (
    <HStack maxW="300px">
      
      <IconButton rounded={'full'} aria-label='add' size={'sm'}  {...inc} icon={<MdOutlineAddCircleOutline />} />
      <Input maxW='60px' size={'sm'} {...input} />
      <IconButton rounded={'full'} aria-label='add' size={'sm'} {...dec} icon={<MdRemoveCircleOutline />} />
     
    </HStack>
  );
};

export default index;
