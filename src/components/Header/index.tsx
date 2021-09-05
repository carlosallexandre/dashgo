import { Flex } from '@chakra-ui/react'

import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

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
      <Logo />
      <SearchBox />
      <Flex align="center" ml="auto"> 
        <NotificationsNav />
        <Profile />  
      </Flex>
    </Flex>
  )
}