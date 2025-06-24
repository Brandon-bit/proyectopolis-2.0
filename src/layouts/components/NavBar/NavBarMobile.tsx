// DropdownMenu
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function NavBarMobile(){
    return(
        <>
            <div className="px-3 py-2 flex items-center justify-between">
                <div>
                    <SidebarTrigger className="opacity-50 hover:opacity-100"/> 
                </div>
                <div>
                    <DropdownMenu>
                        <Button asChild variant="ghost" className="hover:cursor-pointer opacity-50 hover:opacity-100">
                            <DropdownMenuTrigger>
                                <i className="fas fa-bars text-2xl"></i>
                            </DropdownMenuTrigger>
                        </Button>

                        <DropdownMenuContent side="bottom" align="start">
                            <DropdownMenuLabel className="flex items-center gap-2">
                                <p className="text-xs uppercase">Navegación</p>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild className="mb-1.5">
                                <a href="#">
                                    <div className="flex items-center gap-2">
                                        <i className="fas fa-file-export"></i>
                                        <p>EXPORTAR</p>
                                    </div>
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="mb-1.5">
                                <a href="#">
                                    <div className="flex items-center gap-2">
                                        <i className="fas fa-tasks "></i>
                                        <p>LISTA DE PENDIENTES</p>
                                    </div>
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="mb-1.5">
                                <a href="#">
                                    <div className="flex items-center gap-2">
                                        <i className="fas fa-tachometer-alt"></i>
                                        <p>INDICADORES</p>
                                    </div>
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="mb-1.5">
                                <a href="#">
                                    <div className="flex items-center gap-2">
                                        <i className="fas fa-search"></i>
                                        <p>PORTAFOLIO DE PROYECTOS</p>
                                    </div>
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="mb-1.5">
                                <a href="#">
                                    <div className="flex items-center gap-2">
                                        <i className="fas fa-map-marked"></i>
                                        <p>ROADMAP</p>
                                    </div>
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="mb-1.5">
                                <a href="#">
                                    <div className="flex items-center gap-2">
                                        <i className="fas fa-calendar"></i>
                                        <p>AGENDA</p>
                                    </div>
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="mb-1.5">
                                <a href="#">
                                    <div className="flex items-center gap-2">
                                        <i className="fas fa-graduation-cap"></i>
                                        <p>TUTORIALES</p>
                                    </div>
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="mb-1.5">
                                <a href="#">
                                    <div className="flex items-center gap-2">
                                        <i className="fas fa-question"></i>
                                        <p>SOPORTE</p>
                                    </div>
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuLabel className="flex items-center gap-2">
                                <p className="text-xs uppercase">brandonsalinas792@gmail.com</p>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />

                            <DropdownMenuItem asChild className="mb-1.5">
                                <a href="#">
                                    <div className="flex items-center gap-2">
                                        <i className="fas fa-user-cog fa-sm"></i>
                                        <p>Pefil</p>
                                    </div>
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="mb-1.5">
                                <a href="#">
                                    <div className="flex items-center gap-2">
                                        <i className="fas fa-sign fa-sm"></i>
                                        <p>Escala tu negocio</p>
                                    </div>
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="mb-1.5">
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
    )
}