import { createContext, useContext, useEffect, ReactNode } from "react";

import { UseDisclosureReturn, useDisclosure } from "@chakra-ui/react";

import { useRouter } from "next/router";

interface SideBarDrawerProviderProps {
    children: ReactNode;
}

type SideBarDrawerContextData = UseDisclosureReturn;

const SideBarDrawerContext = createContext({} as SideBarDrawerContextData)


export function SideBarDrawerProvider({ children } : SideBarDrawerProviderProps){
    const disclosure = useDisclosure();
    const router = useRouter();


    // Fechar a barra de navegação quando o path mudar
    useEffect( () => {
        disclosure.onClose()
    }, [router.asPath])

    return (
        <SideBarDrawerContext.Provider value={disclosure}>
            { children }
        </SideBarDrawerContext.Provider>
    )

}


export const useSideBarDrawer = () => useContext(SideBarDrawerContext);