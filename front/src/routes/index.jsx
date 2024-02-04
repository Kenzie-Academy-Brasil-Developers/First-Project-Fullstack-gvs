import { Routes, Route} from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { PublicRoutes } from "./PublicRoutes";
export function RoutesMain() {
  return (
    <Routes>
      <Route element={<PublicRoutes/>}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}
