import { Box, Flex, HStack, Button, Heading, Divider, VStack, SimpleGrid} from "@chakra-ui/react";
import Link from "next/link";
import  {Input}  from "../../components/Form/Input";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser (){
    return (
        <Box>
            <Header /> 
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Heading size="lg" fontWeight="normal"> Criar usuário </Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="4" width="100%">
                

                            <Input name="name" id="name" formLabel="Nome" />
                            
                            <Input name="email" type="email" id="email" formLabel="Email"/>
                
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="4" width="100%">
                
                            <Input name="password" type="password" formLabel="Senha" />
                            
                            <Input name="password_confirmation" type="password" formLabel="Confirmar senha"/>
                        </SimpleGrid>
                    </VStack> 

                    <Flex mt="8" justify="flex-end"> 

                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button as="a" colorScheme="whiteAlpha"> Cancelar </Button> 
                            </Link>
                            
                            <Button colorScheme="pink"> Salvar </Button> 
                        </HStack>


                    </Flex>


                </Box> 



            </Flex>
        </Box>
    )
}