import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import SideBarProyectopolis from "./SideBar/SideBarProyectopolis";
import NavBar from "./NavBar/NavBar";
import NavBarMobile from "./NavBar/NavBarMobile";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";

export default function InSessionLayout(){ 
    const isMobile = useMediaQuery("only screen and (max-width : 768px)");

    return(
        <>
            <SidebarProvider>
                <SideBarProyectopolis />
                <SidebarInset className="md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-0">
                    { isMobile ? <NavBarMobile /> : <NavBar />}
                    <main className="p-4 overflow-y-auto">
                        <Outlet /> {/* Aquí se renderiza la vista actual */}
                    </main>
                </SidebarInset>
            </SidebarProvider>
        </>
    )
}