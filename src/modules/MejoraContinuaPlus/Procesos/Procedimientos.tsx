import {NewProcedimientoSection} from "@/components/mejoraContinuaPlus/NewProcedimientoSeccion"
import type {ProcedimientoSectionProps} from "@/components/mejoraContinuaPlus/NewProcedimientoSeccion"
import { useState } from "react"

export default function Procedimientos(){
    const textoSection : ProcedimientoSectionProps  = {
        icono: "fas fa-align-justify",
        textoBoton: "Texto",
        titulo: "Agregar Párrafo",
        tipo: "parrafo"
    }
    const tablaSection : ProcedimientoSectionProps  = {
        icono: "fas fa-table",
        textoBoton: "Tabla",
        titulo: "Agregar Tabla",
        tipo: "tabla"
    }
    const imagenSection : ProcedimientoSectionProps  = {
        icono: "fas fa-image",
        textoBoton: "Imagen",
        titulo: "Agregar Imagen",
        tipo: "imagen"
    }

    type SeccionProcedimiento =
    | { tipo: "parrafo"; contenido: string }
    | { tipo: "tabla"; contenido: string[][] } // array bidimensional
    | { tipo: "imagen"; url: string };

    const [secciones, setSecciones] = useState<SeccionProcedimiento[]>([]);

    return(
        <>
            <h2 className="mb-5">Procedimientos</h2>

            <div className="flex gap-2">
                <NewProcedimientoSection section={textoSection} seccionesCount={secciones.length}/>
                <NewProcedimientoSection section={tablaSection} seccionesCount={secciones.length}/>
                <NewProcedimientoSection section={imagenSection} seccionesCount={secciones.length}/>
            </div>
        </>
    )
}