import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import SideBarProyectopolis from "./SideBar/SideBarProyectopolis";
import NavBar from "./NavBar/NavBar";

export default function InSessionLayout(){ 
    return(
        <>
            <SidebarProvider>
                <SideBarProyectopolis />
                <SidebarInset className="md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-0">
                    <NavBar/>
                    {/**
                     * AQUI IRA EL CONTENIDO DE LAS VISTAS
                     */}
                </SidebarInset>
            </SidebarProvider>
        </>
    )
}