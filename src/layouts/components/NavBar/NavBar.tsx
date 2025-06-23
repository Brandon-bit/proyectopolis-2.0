// DropdownMenu
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { SidebarTrigger } from "@/components/ui/sidebar";

export default function NavBar(){
    return(
        <>
            <div className="px-3 py-2 flex items-center justify-between">
                <div className="flex items-center">
                    <SidebarTrigger /> 
                    <Separator 
                        orientation="vertical" 
                        className="mx-2 data-[orientation=vertical]:h-9" 
                    />
                    <div className="text-sm flex justify-between">
                        <Button variant="ghost" asChild >
                            <a href="#" className="p-5">
                                <div className="text-center">
                                    <i className="fas fa-file-export"></i>
                                    <p>EXPORTAR</p>
                                </div>
                            </a>
                        </Button>
                        
                        <Button variant="ghost" asChild>
                            <a href="#">
                                <div className="text-center">
                                    <i className="fas fa-tasks "></i>
                                    <p>LISTA DE PENDIENTES</p>
                                </div>
                            </a>
                        </Button>

                        <Button variant="ghost" asChild>
                            <a href="#">
                                <div className="text-center">
                                    <i className="fas fa-tachometer-alt"></i>
                                    <p>INDICADORES</p>
                                </div>
                            </a>
                        </Button>

                        <Button variant="ghost" asChild>
                            <a href="#">
                                <div className="text-center">
                                    <i className="fas fa-search"></i>
                                    <p>PORTAFOLIO DE PROYECTOS</p>
                                </div>
                            </a>
                        </Button>
                        <Button variant="ghost" asChild>
                            <a href="#">
                                <div className="text-center">
                                    <i className="fas fa-map-marked"></i>
                                    <p>ROADMAP</p>
                                </div>
                            </a>
                        </Button>
                        <Button variant="ghost" asChild>
                            <a href="#">
                                <div className="text-center">
                                    <i className="fas fa-calendar"></i>
                                    <p>AGENDA</p>
                                </div>
                            </a>
                        </Button>
                        <Button variant="ghost" asChild>
                            <a href="#">
                                <div className="text-center">
                                    <i className="fas fa-graduation-cap"></i>
                                    <p>TUTORIALES</p>
                                </div>
                            </a>
                        </Button>
                    </div>
                </div>
                <div className="flex items-center">
                    <Button variant="ghost" asChild>
                        <a href="#">
                            <div className="text-center">
                                <i className="fas fa-question"></i>
                                <p>SOPORTE</p>
                            </div>
                        </a>
                    </Button>
                    <Separator 
                        orientation="vertical" 
                        className="mx-2 data-[orientation=vertical]:h-9" 
                    />
                    <DropdownMenu>
                        <Button asChild variant="ghost" className="hover:cursor-pointer">
                            <DropdownMenuTrigger className="flex items-center text-xs">
                                <p className="mr-2">Brandon Juarez</p>
                                <i className="fas fa-laugh-wink"></i>
                            </DropdownMenuTrigger>
                        </Button>

                        <DropdownMenuContent side="bottom" align="start">
                            <DropdownMenuLabel className="flex items-center gap-2">
                                <i className="fas fa-envelope fa-sm"></i>
                                <p className="text-xs uppercase">brandonsalinas792@gmail.com</p>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <a href="#">
                                    <div className="flex items-center gap-2">
                                        <i className="fas fa-user-cog fa-sm"></i>
                                        <p>Pefil</p>
                                    </div>
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <a href="#">
                                    <div className="flex items-center gap-2">
                                        <i className="fas fa-sign fa-sm"></i>
                                        <p>Escala tu negocio</p>
                                    </div>
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <a href="#">
                                    <div className="flex items-center gap-2">
                                        <i className="fas fa-sign-out-alt fa-sm"></i>
                                        <p>Cerrar sesión</p>
                                    </div>
                                </a>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <Separator />
        </>
    );
}