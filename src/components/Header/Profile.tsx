import { Box, Flex, Text, Avatar, useBreakpointValue } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData: boolean;
}

export function Profile ({ showProfileData = true }: ProfileProps) {
    
    return (
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">

                <Text>Emanuel Henrique</Text> 
                <Text color="gray.300" fontSize="small">
                    emanuehenriquegb11@gmail.com
                </Text> 
            </Box>

            ) }
            <Avatar size="md" name="Emanuel Henrique" src="https://github.com/Emanuel321-DEV.png"/>
        
        </Flex>

    )

}