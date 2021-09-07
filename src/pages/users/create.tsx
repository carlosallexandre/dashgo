import Link from 'next/link'
import { 
  Box, 
  Button, 
  Divider, 
  Flex, 
  Heading, 
  HStack, 
  SimpleGrid, 
  VStack,
} from "@chakra-ui/react";

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('Email inválido'),
  password: yup.string().required('Senha obrigatória').min(6, 'No minímo 6 caracteres'),
  confirm_password: yup.string().oneOf([yup.ref('password')], 'As senhas precisam ser iguais'),
})

export default function CreateUser() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting }
  } = useForm({ resolver: yupResolver(createUserFormSchema) })
  
  const handleCreateUserSubmit: SubmitHandler<CreateUserFormData> = 
    async (data) => {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log(data)
    }

  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />

        <Box 
          as='form' 
          flex='1'
          borderRadius={8} 
          bg='gray.800' 
          p={['6', '8']}
          onSubmit={handleSubmit(handleCreateUserSubmit)}
        >
          <Heading size='lg' fontWeight='normal'>Criar usuário</Heading>

          <Divider my='6' borderColor='gray.700' />

          <VStack spacing={['6', '8']}>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input 
                name='name' 
                label='Nome completo' 
                error={errors.name}
                {...register('name')} 
              />
              <Input 
                name='email' 
                type='email' 
                label='E-mail' 
                error={errors.email}
                {...register('email')}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input 
                name='password' 
                type='password' 
                label='Senha' 
                error={errors.password}
                {...register('password')}
              />
              <Input 
                name='confirm_password' 
                type='password' 
                label='Confirmação da senha' 
                error={errors.confirm_password}
                {...register('confirm_password')}
              />
            </SimpleGrid>

            <Flex mt={['6', '8']} justify='flex-end'>
              <HStack spacing='4'>
                <Link href='/users' passHref>
                  <Button as='a' colorScheme='whiteAlpha'>Cancelar</Button>
                </Link>
                <Button 
                  colorScheme='pink' 
                  type='submit' 
                  isLoading={isSubmitting}
                >
                  Salvar
                </Button>
              </HStack>
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </Box>
  )
}