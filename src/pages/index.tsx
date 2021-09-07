import { Button, Flex, Stack } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Input } from '../components/Form/Input'

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('e-mail obrigatório').email('email inválido'),
  password: yup.string().required('senha obrigatória'),
})

export default function SignIn() {  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm({ resolver: yupResolver(signInFormSchema) })

  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log(data)
  }  

  return (
    <Flex
      width='100vw'
      height='100vh'
      alignItems='center'
      justifyContent='center'
    >
      <Flex
        as='form'
        width='100%'
        maxWidth='360px'
        backgroundColor='gray.800'
        padding='8'
        borderRadius='8'
        flexDirection='column'
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing='4'>
          <Input 
            name="email" 
            type="email" 
            label="E-mail" 
            error={errors.email}
            {...register('email')} 
          />
          
          <Input 
            name="password" 
            type="password" 
            label="Password" 
            error={errors.password}
            {...register('password')} 
          />
        </Stack>
        
        <Button 
          type='submit' 
          marginTop='8' 
          colorScheme='pink'
          size='lg'
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
