import { Route } from "react-router-dom";

import InSessionLayout from "@/layouts/components/InSessionLayout";
import CadenasDeValor from "@/modules/Procesos/CadenasDeValor";
import DiagramaDeProceso from "@/modules/Procesos/DiagramaDeProcesos";
import ImplementacionDeOlas from "@/modules/Procesos/ImplementacionDeOlas";
import MatrizVoBo from "@/modules/Procesos/MatrizVoBo";
import Dashboard from "@/modules/dashboard";

const routes = (
  <Route path="/" element={<InSessionLayout />}>
    <Route index element={<Dashboard />} />

    {/* RUTAS PROCESOS */}
    <Route path="/proceso/cadenasdevalor" element={<CadenasDeValor />} />
    <Route path="/proceso/diagramadeproceso" element={<DiagramaDeProceso />} />
    <Route path="/proceso/implementaciondeolas" element={<ImplementacionDeOlas />} />
    <Route path="/proceso/matrizvobo" element={<MatrizVoBo />} />
  </Route>  
);

export default routes;