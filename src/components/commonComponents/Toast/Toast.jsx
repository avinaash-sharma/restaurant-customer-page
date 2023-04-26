import { useToast } from '@chakra-ui/react'
import React from 'react'

const Toast = () => {
    const toast = useToast()
  const variants = ['solid', 'subtle', 'left-accent', 'top-accent']
  return (
    <Wrap>
      
        <WrapItem key={i}>
          <Button
            onClick={() =>
              toast({
                title: `${'top-accent'} toast`,
                variant: 'top-accent',
                isClosable: true,
              })
            }
          >
            Show toast
          </Button>
        </WrapItem>
    
    </Wrap>
  )
}

export default Toast