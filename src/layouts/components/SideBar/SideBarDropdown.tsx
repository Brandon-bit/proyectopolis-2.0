// Tooltip
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// DropdownMenu
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal
} from "@/components/ui/dropdown-menu"

import type { SideBarModuloProps } from "@/layouts/types/SideBarModulo";

export default function SideBarDropdown({modulo} : {modulo : SideBarModuloProps}){
    return(
        <>
            <li className='mb-3'>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Tooltip>
                                    <TooltipTrigger><i className={`${modulo.icono} mr-2 text-[1rem]`}></i></TooltipTrigger>
                                    <TooltipContent side="right">
                                        <p>{modulo.titulo}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent side="right" align="start">
                                <DropdownMenuLabel>{modulo.titulo}</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {modulo.menus.map((sm) => (
                                    <DropdownMenuSub>
                                        <DropdownMenuSubTrigger>{sm.titulo}</DropdownMenuSubTrigger>
                                        <DropdownMenuPortal>
                                            <DropdownMenuSubContent>
                                                {sm.vistas.map((v) => (
                                                    <DropdownMenuItem>{v.nombre}</DropdownMenuItem>
                                                ))}
                                            </DropdownMenuSubContent>
                                        </DropdownMenuPortal>
                                    </DropdownMenuSub>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        
                    </li>
        </>
    )
}