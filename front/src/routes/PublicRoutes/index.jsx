import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { clientContext } from "../../providers/clientContext"

export function PublicRoutes (){
    const {client} = useContext(clientContext)
    return !client ? <Outlet/> : <Navigate to="/login"/> 
}