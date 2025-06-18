import type { SideBarMenuProps } from "@/layouts/types/SideBarMenu";
import { useState } from "react";

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"

export default function SideBarMenu({menu} : {menu : SideBarMenuProps}){
    const [collapsed, setCollapse] = useState(false)

    return(
        <>
            <div 
                className={`flex items-center justify-between mt-4 text-sm hover:cursor-pointer hover:opacity-100 ${collapsed ? "opacity-100" : "opacity-50"}`}
                onClick={() => setCollapse(!collapsed)}
            >
                <div className="flex items-center">
                    {menu.icono != "" && <i className={`${menu.icono} mr-2`}></i>}
                    <p className="hover:opacity-100">{menu.titulo}</p>
                </div>
                <i className={`fas fa-angle-right transition-transform duration-200 ${collapsed ? "rotate-90" : "rotate-0"}`}></i>
            </div>

            {collapsed && (
                <ul className="bg-white rounded mt-2 text-black p-2.5">
                    {menu.vistas.map((v) => (
                        <a href={v.link}>
                            <li className="mb-2 hover:bg-blue-50 p-1 rounded">{v.nombre}</li>
                        </a>
                    ))}
                </ul>
            )}
            

            {/* <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="flex items-center">
                        <div className="flex items-center">
                            {menu.icono != "" && <i className={`${menu.icono} mr-2`}></i>}
                            <p className="hover:opacity-100">{menu.titulo}</p>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            </Accordion> */}
        </>
    )
}