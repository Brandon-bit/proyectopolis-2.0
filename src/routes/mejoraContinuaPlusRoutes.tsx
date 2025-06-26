import type { RouteObject } from "react-router-dom";

import CadenasDeValor from "@/modules/MejoraContinuaPlus/Procesos/CadenasDeValor";
import DiagramaDeProceso from "@/modules/MejoraContinuaPlus/Procesos/DiagramaDeProcesos";
import ImplementacionDeOlas from "@/modules/MejoraContinuaPlus/Procesos/ImplementacionDeOlas";
import MatrizVoBo from "@/modules/MejoraContinuaPlus/Procesos/MatrizVoBo";
import MetodologiaDeProcesos from "@/modules/MejoraContinuaPlus/Procesos/MetodologiaDeProcesos";
import MatrizReduccionDeTiempos from "@/modules/MejoraContinuaPlus/Procesos/MatrizReduccionDeTiempos";
import Rasci from "@/modules/MejoraContinuaPlus/Procesos/Rasci";
import TiemposMovimientos from "@/modules/MejoraContinuaPlus/Procesos/TiemposMovimientos";  
import Encuestas from "@/modules/MejoraContinuaPlus/AdministracionDelCambio/Encuestas";
import DocumentosDeCapacitacion from "@/modules/MejoraContinuaPlus/AdministracionDelCambio/DocumentosDeCapacitacion";
import Examenes from "@/modules/MejoraContinuaPlus/AdministracionDelCambio/Examenes";
import Almacenamiento from "@/modules/MejoraContinuaPlus/ManualesPoliticas/Almacenamiento";
import Configuracion from "@/modules/MejoraContinuaPlus/ManualesPoliticas/Configuracion";
import Procedimientos from "@/modules/MejoraContinuaPlus/Procesos/Procedimientos";

export const mejoraContinuaPlusRoutes : RouteObject[] = [
// PROCESOS
  { path: "/proceso/cadenasdevalor", element: <CadenasDeValor /> },
  { path: "/proceso/diagramadeproceso", element: <DiagramaDeProceso /> },
  { path: "/proceso/implementaciondeolas", element: <ImplementacionDeOlas /> },
  { path: "/proceso/matrizvobo", element: <MatrizVoBo /> },
  { path: "proceso/metodologia", element: <MetodologiaDeProcesos /> },
  { path: "/proceso/reducciontiempos", element: <MatrizReduccionDeTiempos /> },
  { path: "/proceso/rasci", element: <Rasci /> },
  { path: "/proceso/tiemposmovimientos", element: <TiemposMovimientos /> },
  { path: "/proceso/tiemposmovimientos", element: <TiemposMovimientos /> },
  { path: "/proceso/procedimientos", element: <Procedimientos /> },

// MANUALES Y POLITICAS
  { path: "/manualespoliticas", element: <Almacenamiento /> },
  { path: "/manualespoliticas/configuracion", element: <Configuracion /> },

// ADMINISTRACION DEL CAMBIO
  { path: "/admoncambio/encuestas", element: <Encuestas /> },
  { path: "/admoncambio/capacitacion", element: <DocumentosDeCapacitacion /> },
  { path: "/admoncambio/examenes", element: <Examenes /> }
];