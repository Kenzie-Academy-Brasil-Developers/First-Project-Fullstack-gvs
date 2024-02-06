import { Routes, Route} from "react-router-dom";
import { Login } from "../pages/Login";
// import { Register } from "../pages/Register";
export function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
    </Routes>
  );
}
