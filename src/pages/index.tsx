import { Flex, Button, Stack, FormLabel } from "@chakra-ui/react";
import  { Input } from "../components/Form/Input";

import { useForm, SubmitHandler } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required()
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise( resolve => setTimeout(resolve, 2000))
    
    console.log(`Values aqui ${values}`)

  }


  return (
    <Flex width="100vw" height="100vh" alignItems="center" justifyContent="center">

      <Flex 
        as="form" 
        width="100vw" 
        maxWidth={360}
        bg="gray.800"
        p="8" // 32 px
        borderRadius={8}
        flexDir="column"
        onSubmit={ handleSubmit(handleSignIn) }
      >


      <Stack spacing="4">
        <Input 
          name="email" 
          type="email" 
          formLabel="E-mail" 
          error={errors.email}
          {...(register("email", { required: "E-mail obrigatório" }))}
        />

        <Input 
          name="password" 
          type="password" 
          formLabel="Password" 
          {...register("password")
        }
        />

      </Stack>

        <Button 
          type="submit" 
          mt="6" 
          colorScheme="pink"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>


      </Flex>

    </Flex>
  )
}
