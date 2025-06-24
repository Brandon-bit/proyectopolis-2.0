import type { SideBarMenuProps } from "@/layouts/types/SideBarMenu";
import { useState } from "react";
import { Link } from "react-router-dom";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"

export default function SideBarMenu({menu} : {menu : SideBarMenuProps}){
    const [collapsed, setCollapse] = useState(false)
    const ulClasses = collapsed ? 
        "scale-y-100 opacity-100 max-h-100 mt-2.5 pt-1 pb-1" : 
        "scale-y-0 opacity-0 max-h-0";

    return(
        <>
            <div 
                className={`flex items-center justify-between mt-3 text-sm hover:cursor-pointer hover:opacity-100 ${collapsed ? "opacity-100" : "opacity-50"}`}
                onClick={() => setCollapse(!collapsed)}
            >
                <div className="flex items-center">
                    {menu.icono != "" && <i className={`${menu.icono} mr-2`}></i>}
                    <p className="hover:opacity-100">{menu.titulo}</p>
                </div>
                <i className={`fas fa-angle-right transition-transform duration-200 ${collapsed ? "rotate-90" : "rotate-0"}`}></i>
            </div>

            <ul className={`origin-top bg-white text-black rounded transition-all duration-200 ease-in-out overflow-hidden' ${ulClasses}`}>
                {menu.vistas.map((v) => (
                    <Link to={v.link}>
                        <li className="hover:bg-blue-50 p-1 m-2 rounded">{v.nombre}</li>
                    </Link>
                ))}
            </ul>
        </>
    )
}