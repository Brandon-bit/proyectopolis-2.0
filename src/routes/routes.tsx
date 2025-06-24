import { mejoraContinuaPlusRoutes } from "./mejoraContinuaPlusRoutes";
import { Route } from "react-router-dom";
import InSessionLayout from "@/layouts/components/InSessionLayout";
import Dashboard from "@/modules/dashboard";

const routes = (
  <Route path="/" element={<InSessionLayout />}>
    <Route index element={<Dashboard />} />

    {/* RUTAS MEJORA CONTINUA PLUS */}
    {mejoraContinuaPlusRoutes.map((r) => (
      <Route path={r.path} element={r.element} />
    ))}
  </Route>  
);

export default routes;