import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean;
  children: number;
  onPageChange: (page: number) => void;
}

export function PaginationItem({ 
  isCurrent = false, 
  children: page,
  onPageChange,
}: PaginationItemProps) {
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
        {page}
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
      onClick={() => onPageChange(page)}
    >
      {page}
    </Button>
  )
}