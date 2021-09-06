import { ElementType } from 'react'
import { 
  Link, 
  LinkProps as ChakraLinkProps, 
  Icon, 
  Text 
} from '@chakra-ui/react'

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display='flex' aling='center' {...rest}>
      <Icon as={icon} fontSize='20' />
      <Text ml='4' fontWeight='medium'>{children}</Text>
    </Link>
  )
}