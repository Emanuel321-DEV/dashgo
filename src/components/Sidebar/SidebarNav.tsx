import { Stack } from "@chakra-ui/react";
import { RiInputMethodLine, RiContactsLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav (){ 
    return (
        <Stack spacing="12" align="flex-start">
                <NavSection title="Geral">
                    <NavLink icon={RiInputMethodLine}> Dashboard </NavLink>
                    <NavLink icon={RiContactsLine}> Contacts </NavLink>
                </NavSection> 

                <NavSection title="AUTOMACAO">
                    <NavLink icon={RiInputMethodLine}> Formulários </NavLink>
                    <NavLink icon={RiContactsLine}> Automação </NavLink>
                </NavSection> 

            </Stack>

    )
}