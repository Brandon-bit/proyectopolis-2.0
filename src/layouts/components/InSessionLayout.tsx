import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import SideBarProyectopolis from "./SideBar/SideBarProyectopolis";

export default function InSessionLayout(){ 
    
    

    return(
        <>
            <SidebarProvider>
                <SideBarProyectopolis />
                <main>
                    <SidebarTrigger /> 
                </main>
            </SidebarProvider>
        </>
    )
}