// import { useEffect } from "react";
// import { createContext, useState } from "react";
// import { api } from "../services/api";

// export const contactContext = createContext({})
// export function contactProvider({children}){
//     const [contacts, setContacts] = useState([])

//     useEffect(()=>{
//         (async () => {
//             const response = await api.get('/contact')
//             setContacts(response.data)
//         })()
//     },[])
    
    
//     return(
//         <contactContext.Provider
//         value={{

//         }}
//         >
//         {children}
//         </contactContext.Provider>
//     )
// }