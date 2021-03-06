import { Flex, IconButton, useBreakpointValue, Icon } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSideBarDrawer } from "../../contexts/SideBarDrawerContext";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header(){

    const { onOpen } = useSideBarDrawer();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    }) 
    return (
        <Flex 
            as="header"
            w="100%"
            maxWidth={1480} // 1480px
            h="20" // 20 x 4 = 80px
            marginX="auto"
            mt="4"
            px="6"
            align="center"   
        >

            { !isWideVersion && (
                <IconButton 
                    aria-label="Open Navigation"
                    icon={<Icon as = {RiMenuLine}/>}
                    fontSize="24"
                    variant='unstyled'
                    onClick={onOpen}
                    mr="2"
                    mt="2"                  
                />
            )}
            
            <Logo />

            { isWideVersion && <SearchBox /> }
        
            <Flex align="center" ml="auto"> 
                <NotificationsNav />
                <Profile showProfileData={isWideVersion} />
            </Flex>

        </Flex>
    )

}