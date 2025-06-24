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

import { Link } from "react-router-dom";

import type { SideBarModuloProps } from "@/layouts/types/SideBarModulo";
import { Button } from "@/components/ui/button";

export default function SideBarDropdown({modulo} : {modulo : SideBarModuloProps}){
    return(
        <>
            <li className='mb-3'>
                        <DropdownMenu>
                            <Button asChild variant="ghost" className="p-2 flex justify-center opacity-50 hover:opacity-100 hover:cursor-pointer">
                                <DropdownMenuTrigger className="flex justify-center">
                                    <Tooltip>
                                        <TooltipTrigger asChild><i className={`${modulo.icono} text-[1rem] hover:cursor-pointer`}></i></TooltipTrigger>
                                        <TooltipContent side="right">
                                            <p>{modulo.titulo}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </DropdownMenuTrigger>
                            </Button>
                            

                            <DropdownMenuContent side="right" align="start">
                                <DropdownMenuLabel>{modulo.titulo}</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {modulo.menus.map((sm) => (
                                    <DropdownMenuSub key={sm.dni}>
                                        <DropdownMenuSubTrigger>{sm.titulo}</DropdownMenuSubTrigger>
                                        <DropdownMenuPortal>
                                            <DropdownMenuSubContent>
                                                {sm.vistas.map((v) => (
                                                    <DropdownMenuItem asChild key={v.nombre}>
                                                        <Link to={v.link}>{v.nombre}</Link>
                                                    </DropdownMenuItem>
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