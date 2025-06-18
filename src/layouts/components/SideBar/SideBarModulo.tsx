import type { SideBarModuloProps } from "@/layouts/types/SideBarModulo";
import SideBarMenu from "./SideBarMenu";

export default function SideBarModulo({modulo} : {modulo : SideBarModuloProps}){
    return(
        <>
            {modulo.titulo != "" ? 
                <li className="flex items-center text-gray-400 mt-4">
                    <i className={`${modulo.icono} mr-2 text-[1.4rem]`}></i>
                    <p className="uppercase text-xs font-bold">{modulo.titulo}</p>
                </li> :
                <li className="mt-4"></li>
            }

            {/* Apartados */}
            <div className="mb-4">
                {modulo.menus.map((menu) => (
                    <SideBarMenu menu={menu} key={menu.dni}/>
                ))}
            </div>

            <li className="">
                <hr />
            </li>
        </>
    )
}