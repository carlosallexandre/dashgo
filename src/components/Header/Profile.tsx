import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align='center'>
      <Box marginRight='4' textAlign='right'>
        <Text>Carlos Alexandre</Text>
        <Text 
          color='gray.300' 
          fontSize='small'
        >
          carlosallexandre@callweb.dev
        </Text>
      </Box>
      <Avatar 
        size='md' 
        name='Carlos Alexandre' 
        src='https://github.com/carlosallexandre.png' 
      />
    </Flex>
  )
}