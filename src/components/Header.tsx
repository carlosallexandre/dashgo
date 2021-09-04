import { Flex, Icon, Input, HStack, Text, Box, Avatar } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export function Header() {
  return (
    <Flex
      as="header"  
      width="100%"
      maxWidth="1480px"
      height="20"
      marginX='auto'
      marginTop='4'
      paddingX='24px'
      alignItems='center'
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        width="64"
      >
        dashgo
        <Text as="span" marginLeft="1" color="pink.500">.</Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        paddingY="4"
        paddingX="8"
        marginLeft="6"
        maxWidth="400px"
        alignSelf="center"
        color="gray.200"
        position="relative"
        backgroundColor="gray.800"
        borderRadius="full"
      >
        <Input 
          color="gray.50"
          variant="unstyled"
          paddingX='4'
          marginRight='4'
          placeholder="Buscar na plataform"
          _placeholder={{ color: 'gray.400' }}
        />

        <Icon as={RiSearchLine} fontSize={20} />
      </Flex>
   
      <Flex
        alignItems="center"
        marginLeft="auto"
      >
 
        <HStack 
          spacing="8"
          marginX='8'
          paddingRight='8'
          paddingY='1'
          color='gray.300'
          borderRightWidth={1}
          borderColor='gray.700'
        >
          <Icon as={RiNotificationLine} fontSize={20} />
          <Icon as={RiUserAddLine} fontSize={20} />
        </HStack>
      
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
      </Flex>
    </Flex>
  )
}