import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  isShowProfileData?: boolean;
}

export function Profile({ isShowProfileData }: ProfileProps) {
  return (
    <Flex align='center'>
      {isShowProfileData && (
        <Box marginRight='4' textAlign='right'>
          <Text>Carlos Alexandre</Text>
          <Text 
            color='gray.300' 
            fontSize='small'
          >
            carlosallexandre@callweb.dev
          </Text>
        </Box>
      )}
      <Avatar 
        size='md' 
        name='Carlos Alexandre' 
        src='https://github.com/carlosallexandre.png' 
      />
    </Flex>
  )
}