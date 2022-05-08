import { createContext, useContext, useEffect } from "react";
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";

type SideBarDrawerContextData = UseDisclosureReturn;

const ContextSideBar = createContext({} as SideBarDrawerContextData);

function SideBarDrawerProvider ({ children }){
    const disclosure = useDisclosure();
    const router = useRouter();


    useEffect(() => {
        disclosure.onClose()
    }, [router.asPath])

    return (
        <ContextSideBar.Provider value={ disclosure }>
            { children }
        </ContextSideBar.Provider>
    )

}




const useSideBarDrawer = () => useContext(ContextSideBar); 




export { useSideBarDrawer, SideBarDrawerProvider }


