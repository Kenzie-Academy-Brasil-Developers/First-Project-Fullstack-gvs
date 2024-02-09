import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
export const clientContext = createContext({});
export function ClientProvider({ children }) {
  const [client, setClient] = useState(null);
  const token = localStorage.getItem('@TOKEN')
  const navigate = useNavigate();
  const dataClient = localStorage.getItem('@DATACLIENT')

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const clientId = localStorage.getItem("@CLIENTID");

    async function getClient(clientId) {
      try {
        const { data } = await api.get(`/client/${clientId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setClient(data);
      } catch (err) {
        console.log(err);
      }
      if (token && clientId) {
      getClient();
      }
    }
  }, []);
  function clientLogout() {
    setClient(null);
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@CLIENTID");
    navigate("/");
  }

  async function clientLogin(formData) {
    const token = localStorage.getItem("@TOKEN");
    console.log('TOKENNN')
    if(token){
      const clientId = JSON.parse(atob(token.split(".")[1]));
      console.log(clientId);
    }
    //const decodedToken = jwtDecode(token)
    //console.log(decodedToken);
    try {
      //getClient(clientId)
      const {data} = await api.post("/session/login", formData)
      //console.log(data);
      navigate("/dashboard")
      //const { token } = data
      //api.defaults.headers.common.Authorization = `Bearer ${token}`
      localStorage.setItem("@TOKEN", data.token)
      localStorage.setItem('@CLIENTID', data.id)
      toast("Login successfully!");
    } catch (error) {
      toast.error("Login failed!");
    }
  }
  async function clientRegister(data) {
    try {
      const response = await api.post("/client", data);
      console.log(response);
      //setClient(response.data)
      console.log(data);
      toast.success("Conta cadastrada com sucesso");
      navigate('/')
    }catch (error) {
      console.log(error);
      toast.error("Ops, algo deu errado!");
      if (error.response?.data === "Email already exists") {
        toast.error("Email already exists!");
      }}
      if(error.response?.data === "Number already exists") {
        toast.error("Email already exists!");

    }
  }

  return (
    <clientContext.Provider
      value={{
        clientRegister,
        client,
        setClient,
        clientLogout,
        clientLogin,
        navigate,
        
      }}
    >
      {children}
    </clientContext.Provider>
  );
}
