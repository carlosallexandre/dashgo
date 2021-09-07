import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'
import { 
  FormControl, 
  FormErrorMessage,
  Input as ChakraInput, 
  InputProps as ChakraInputProps, 
  FormLabel,
} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = 
  ({ name, label, error = null, ...rest }, ref) => {
    return (
      <FormControl isInvalid={!!error}>
        <FormLabel id={`${name}-label`} htmlFor={name}>{label}</FormLabel>
          <ChakraInput
            ref={ref}
            id={name} 
            name={name} 
            focusBorderColor='pink.500'
            bgColor='gray.900'
            variant='filled'
            _hover={{
              bgColor: 'gray.900'
            }}
            size='lg'
            {...rest}
          />
          {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    )
  }

export const Input = forwardRef(InputBase)