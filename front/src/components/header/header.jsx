import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import { clientContext } from "../../providers/clientContext";
import { useState } from "react";

export const Header = () => {
    const {client, clientLogout } = useState(clientContext)
    //const firstLetter = client.completeName.charAt(0)
    return(
        <header>
            <div>
                <div>
                    <div>
                        <img src={logo} alt="logo" />    
                    </div>
                    <div>
                        {/* <p>${firstLetter}</p> */}
                        <button onClick={() => clientLogout()}>exit</button>
                    </div>
                </div>
            </div>
        </header>
    )
}