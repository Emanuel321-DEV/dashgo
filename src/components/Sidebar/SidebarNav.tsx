import { Stack } from "@chakra-ui/react";
import { RiInputMethodLine, RiContactsLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav (){ 
    return (
        <Stack spacing="12" align="flex-start">
                <NavSection title="Geral">
                    <NavLink href="/dashboard" icon={RiInputMethodLine}> Dashboard </NavLink>
                    <NavLink href="/users" icon={RiContactsLine}> Usuários </NavLink>
                </NavSection> 

                <NavSection title="AUTOMACAO">
                    <NavLink href="/forms" icon={RiInputMethodLine}> Formulários </NavLink>
                    <NavLink href="/automation" icon={RiContactsLine}> Automação </NavLink>
                </NavSection> 

            </Stack>

    )
}