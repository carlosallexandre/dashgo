import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean;
  children: string;
}

export function PaginationItem({ isCurrent = false, children }: PaginationItemProps) {
  if (isCurrent) 
    return (
      <Button 
        size='sm'
        fontSize='xs'
        width='4'
        colorScheme='pink'
        disabled
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'default'
        }}
      >
        {children}
      </Button>
    )
  
  return (
    <Button 
      size='sm'
      fontSize='xs'
      width='4'
      bg='gray.700'
      hover={{
        bgColor: 'gray.500',
      }}
    >
      {children}
    </Button>
  )
}