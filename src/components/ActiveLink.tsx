import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { cloneElement, ReactElement } from 'react'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  exact?: boolean;
}

export function ActiveLink({ exact = false, children, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter()
  
  const isActive = exact 
    ? asPath === rest.href || asPath === rest.as
    : asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as))

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400': 'gray.50'
      })}
    </Link>
  )
}