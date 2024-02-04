import { application } from "express";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { setSourceMapRange } from "typescript";
import { toast } from "react-toastify";


export const clientContext = createContext({});
export function ClientProvider({ children }) {
  const [client, setClient] = useState(null);
  const navigate = useNavigate();

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
    }
    if (token && clientId) {
      getClient();
    }
  }, []);
  function clientLogout() {
    setClient(null);
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@CLIENTID");
    navigate("/");
  }

  async function clientLogin(formData) {
    try {
      const { data } = await api.post("/session/login", formData);
      toast.success("Login efetuado com sucesso!");
      setClient(data.client);
      localStorage.setItem("@CLIENTID", data.client.id);
      localStorage.setItem("@TOKEN", data.token);
      navigate("/dashboard");
    } catch (error) {
      toast.error("Email ou senha incorreto");
    } 
  }
  async function clientRegister(formData) {
    try {
      await api.post("/client", formData);
      toast.success("Conta cadastrada com sucesso");
      navigate("/session/login");
    } catch (error) {
      toast.error("Ops, algo deu errado!");
      if (error.response?.data === "Email already exists") {
        toast.error("Email already exists!");
      }
    } 
  }
  

  return (
    <clientContext.Provider
      value={{
        client,
        setClient,
        clientLogout,
        clientLogin,
        navigate,
        clientRegister,
      }}
    >
      {children}
    </clientContext.Provider>
  );
}
