import { HStack, Icon, IconButton, Input, useNumberInput } from "@chakra-ui/react";
import React from "react";
import { MdOutlineAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/md';

const index = () => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 0,
      min: 0,
      max: 20,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();
  return (
    <HStack maxW="300px">
      
    <IconButton rounded={'full'} aria-label='add' size={'xs'} {...dec} icon={<Icon as={MdRemoveCircleOutline} w={5} h={5} />} />
    <Input isDisabled={'true'} maxW='40px' size={'sm'} {...input} />
    <IconButton rounded={'full'} aria-label='add' size={'xs'}  {...inc} icon={<Icon as={MdOutlineAddCircleOutline} w={5} h={5} />} />
     
    </HStack>
  );
};

export default index;
