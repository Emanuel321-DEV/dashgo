import { Checkbox, Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Td, Tbody, Text } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination/index";

export default function ListUsers () {

    return (
        <Box>
            <Header /> 
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>
                        <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="pink"
                            cursor="pointer"
                            leftIcon={ <Icon as={RiAddLine} fontSize="20" /> }
                        >
                            Criar novo

                        </Button>
                    </Flex> 

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" width="8">
                                    <Checkbox colorScheme="pink" />
                                </Th>

                                <Th>Usuários</Th>
                                <Th>Data de cadastro</Th> 
                                <Th width="8"></Th> 

                            </Tr>
                        </Thead>

                        <Tbody>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box> 
                                        <Text fontWeight="bold">Emanuel Henrique</Text>
                                        <Text fontSize="sm" color="gray.300">emanuelhenriquegb11@gmail.com</Text> 
                                    </Box>
                                </Td>
                                <Td>04 de Abril, 2021</Td>
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        cursor="pointer"
                                        leftIcon={ <Icon as={RiPencilLine} fontSize="16"/> }
                                    >
                                        EDITAR
                                    </Button>
                                </Td>

                            </Tr>

                        </Tbody>

                    </Table>

                    <Pagination />

                </Box> 



            </Flex>
        </Box>
    )

}