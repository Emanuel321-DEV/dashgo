import { Box, useBreakpointValue, DrawerOverlay, Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerCloseButton } from "@chakra-ui/react";
import { useSideBarDrawer } from "../../contexts/SideBarDrawerContext";

import { SidebarNav } from "./SidebarNav";

export function Sidebar (){
    const { isOpen, onClose } = useSideBarDrawer();

    const isDrawerSideBar = useBreakpointValue({
        base: true,
        lg: false       
    })
    
    
    if(isDrawerSideBar){
        return (
            <Drawer isOpen={isOpen} placement="left" onClose={onClose} >
                <DrawerOverlay >
                    <DrawerContent bg="gray.800" p="4">
                        
                        <DrawerCloseButton mt="4"/>
                        <DrawerHeader>
                            Navegação
                        </DrawerHeader>

                        <DrawerBody>

                            <SidebarNav />

                        </DrawerBody>

                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>

        )

    }

    
    else {
        
        return (
            <Box as="aside" w="64" mr="8" >
            
                <SidebarNav />
            </Box>
        )

    }
}