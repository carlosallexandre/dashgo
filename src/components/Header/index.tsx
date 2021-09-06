import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'

import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

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
      {!isWideVersion && (
        <IconButton
          aria-label='Open navigation'  
          icon={<Icon as={RiMenuLine} />}
          fontSize='24'
          variant='unstyled'
          onClick={onOpen}
          mr='2'
        >

        </IconButton>
      )}

      <Logo />

      {isWideVersion && <SearchBox />}
      
      <Flex align="center" ml="auto"> 
        <NotificationsNav />
        <Profile isShowProfileData={isWideVersion} />  
      </Flex>
    </Flex>
  )
}