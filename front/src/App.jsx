import { RoutesMain } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { ClientProvider} from "./providers/clientContext";
function App(){

  return (
    <>
      <ToastContainer autoClose={2000}/>
      <ClientProvider>
        <RoutesMain/>
      </ClientProvider>
    </>
  )
}

export default App
